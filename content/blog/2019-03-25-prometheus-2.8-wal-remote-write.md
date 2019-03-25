+++
title = "What’s New in Prometheus 2.8: WAL-Based Remote Write"
author = "callum"
date = "2019-03-25"
keywords = ["Prometheus"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "Six months in the making, Write-Ahead Logging (WAL) for the remote_write API was one of the enhancements we included in the Prometheus 2.8 release on March 12."
categories = ["Prometheus"]
excerpt = "Six months in the making, Write-Ahead Logging (WAL) for the remote_write API was one of the enhancements we included in the Prometheus 2.8 release on March 12."
+++

Six months in the making, Write-Ahead Logging (WAL) for the remote_write API was one of the enhancements we included in the Prometheus 2.8 release on March 12. It’s a change intended to safeguard client metrics in the face of any network issues.

The remote_write API allows you to send data from Prometheus to other monitoring systems, including Grafana Cloud. The previous implementation hooked into Prometheus's metric scraping and was given copies of all the samples Prometheus scraped, sending them out to configured remote write endpoints.

If the remote endpoint was down or Prometheus was unable to reach it for any reason, there was only a small in-memory buffer in place - which proved problematic for two reasons: the data could back up, end up using too much memory, and causing Prometheus to OOM. Or if we got to the maximum size of the buffer defined by the existing configuration, we would start dropping data.

**WAL-based remote_write**

In the latest 2.8 Prometheus release, instead of buffering the data in memory, the remote_write now reads the write-ahead log. Before committing data to long-term storage, Prometheus writes all of the transactions that are occurring - samples that have been scraped and metadata about new time series - to a write-ahead log.

So if the endpoint is having an issue, we simply stop where we are in the write-ahead log and attempt to resend the failed batch of samples. It won’t drop data or cause memory issues because it won’t continue reading the write-ahead log until it successfully sends the data. The 2.8 update effectively uses a constant amount of memory, and the buffer is virtually indefinite, depending only on the size of your disk.

Another key enhancement we made involves cases with a single batch of data: If that send fails, the system no longer encodes that data every time we attempt to resend it. We simply encode it once and then keep sending it until it succeeds.

**Corner cases**

Initially, this was pitched as a two- to four-week project. But what happened along the way was that there were a lot of little edge cases that came up. The new approach broke assumptions in the existing code around locking, parallelisation and concurrency that needed addressing.

For example, the existing code within Prometheus assumed that all write-ahead log files were fully written. So one of the major things we had to do was write code for the new remote write to read the write-ahead log files as they were being written.

Also, the existing reader silently accepted files with certain errors that the code would eventually repair. We developed the new reader on the assumption that there weren’t  any corruptions in the files. In reality the WAL can become corrupted in many ways, so we had to add techniques to deal with this.

But the work was worth it. Thus far, the update has gotten a positive response - CPU usage is down and memory usage is much more predictable. This being a pretty big change, I expected there could be some issues with it. So far there have only been a few reported issues related to WAL corruptions, which we have ideas on how to address. If you have feedback, please feel free to open issues on GitHub.