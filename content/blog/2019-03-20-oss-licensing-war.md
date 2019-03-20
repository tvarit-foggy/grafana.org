+++
title = "Everything You Need to Know About the OSS Licensing War, Part 1."
author = "raj"
date = "2019-03-20"
keywords = ["Grafana", "GrafanaCon", "OSS", "License"]
cover_image = "/assets/img/blog/hyperspace_falcon.png"
cover_opacity = "0.4"
cover_blur = "1px"
description = "The emergence of a new breed of commercial open source company, challenging the dominance of public cloud, has set off a licensing war that calls into question the very meaning of open source."
categories = ["Grafana", "GrafanaCon"]
excerpt = "The emergence of a new breed of commercial open source company, challenging the dominance of public cloud, has set off a licensing war that calls into question the very meaning of open source."
+++

The emergence of a new breed of commercial open source company, challenging the dominance of public cloud, has set off a licensing war that calls into question the very meaning of open source. We debated this topic at last month’s GrafanaCon Los Angeles, where I participated in [a spirited panel](https://www.youtube.com/watch?v=hvX3Q8kGz_0).

Since then, the battle lines have been redrawn. Last week, [Amazon announced its Open Distribution for Elasticsearch](https://aws.amazon.com/blogs/opensource/keeping-open-source-open-open-distro-for-elasticsearch/). And [MongoDB Inc. abandoned OSI approval of its new SSPL license](http://lists.opensource.org/pipermail/license-review_lists.opensource.org/2019-March/003989.html).

We're getting into uncharted territory. This has the potential to change how software is developed, funded, and delivered. What is going on? How did we get to this point? And where do we go from here?  Let’s look back at the history of commercial open source, so we can understand why there is a fundamental tension growing between that very concept and the public cloud vendors.

**The Birth of Commercial Open Source**

You can't discuss commercial open source without talking about Red Hat Inc. They were the pioneers, going public way back in 2002, and shortly thereafter achieving the honor of becoming the world’s first $1B commercial open source company. This was a big deal. Back then, believing wholesale in the fundamental advantages of open source made you something of a heretic. Red Hat’s success making a business out of what had basically been a religion was intoxicating for a generation of future open source entrepreneurs.

Initially focused on Linux, Red Hat diversified into becoming the trusted purveyor of a wide variety of open source infrastructure software. Over the years, Linux and the open source stacks added insane value to the world. It underpinned empires. The open source community watched it topple Sun and Microsoft in the datacenter. Power the NYSE. Go to Mars. Give birth to Android.

The rise of Linux and Red Hat was great for users, moved the entire software industry forward, and trickled down into all sorts of new infrastructure software and companies. This happened because the world was free to use, meld, and otherwise co-opt the open source Linux code to scratch their own itches. This was built into the license. It was part of the ethos.

A few months ago, IBM announced that it would purchase Red Hat for $36B, bringing things full circle. It was a public market validation of what everyone could already see: Open source had truly arrived.

The most sophisticated companies wanted their most mission critical software open. Red Hat rode that first wave, and had built either a great or a pathetic business—people couldn’t seem to decide—by capturing a relatively small part of that value.

As Grafana Labs became a company in 2015, I keenly watched a new wave of commercial open source companies like Elastic NV (creators of Elasticsearch), and MongoDB Inc. (creators of MongoDB) grow their communities and their companies. There are many more such companies on the horizon. My friend Joseph Jacks (one of the most un-VC-like VCs in the business) is [tracking over 40 such commercial open source companies with annual revenue worth >$100M](https://docs.google.com/spreadsheets/d/17nKMpi_Dh5slCqzLSFBoWMxNvWiwt2R-t4e_l7LPLhU/edit#gid=0). Open source, and the infrastructure software space in general, is a much bigger market than many of us thought it would be.

**Software Becomes A Service**

Red Hat got their start selling CD-ROMs of Linux through physical distributors like book stores. I still have mine from 1994. The shift from physical media to digital downloads was something they navigated beautifully. They started continually delivering updates and fixes over a new network called the Internet.

Their primary offering — access to their support and this continual, curated update stream — evolved into a “subscription.” It would reflect the start of another shift in how customers were thinking about their software in general. They wanted to treat it like a utility: consume what they needed, and pay for what they used. They didn’t want to have to deal with the muck and hassle of installing, maintaining, and scaling their software themselves. They didn’t want to buy the bits anymore. They wanted to rent the service.

Software as a Service (SaaS), and the cloud in general, would reshape the entire value chain in how software was consumed. At first, software services were built upon a diverse ecosystem of data centers run by telecom companies, web hosters, and co-location providers. More recently, we’ve seen the rise of the super datacenters: the large public cloud players like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud.

AWS in particular deserves special attention. It is the apex predator of the public clouds. The reason why Amazon is the most valuable company in the world is because of AWS, not the e-commerce side project that it runs. If AWS were a company, it’d be worth more than all the companies on Joseph’s list combined. AWS dominates its competition.

Open source may be winning infrastructure software, but the public cloud, and AWS in particular, is winning where that software is run and how it is consumed by customers.

This sets the stage for our conflict.

**AWS: Friend or Foe?**

The actual “thing” that AWS is ultimately selling is computer capacity. AWS wants to [commoditize the complement](https://www.joelonsoftware.com/2002/06/12/strategy-letter-v/) of what uses this capacity: software. Since open source software is starting to become the most coveted infrastructure software, it’s the ideal software for AWS to try and commoditize, and sell as a service to its customers.

Due to the freedoms that open source provides, it’s also the easiest.

I suspect AWS finds this extremely convenient. The cornerstone, original AWS service that it launched with in 2006 was Linux itself (EC2), rented by the minute.

AWS can take the most popular open source software and provide it to all its customers, without even asking let alone paying the creators of that software. It’s like taking candy from a baby.

Except in the case of software like Elasticsearch and MongoDB, the baby is a multi-billion-dollar open source company that is very concerned about meeting its sales targets. And the candy was paid for by the VCs.

On October 1, 2015, AWS took the candy, and launched the Amazon Elasticsearch service. It was likely a dark day at Elastic NV. They were late to the cloud party, having just bought another startup offering Elasticsearch as a service. Now they’d been significantly disintermediated by the apex predator of cloud.

But it was a clear sign of how far their Elasticsearch project had come.

**Open Source Is Not a VC Business Model**

Elastic NV buckled down and started focusing on writing more commercial software to complement its popular open source project — and to build a moat around its business.

Unlike Red Hat, most of the new-generation commercial open source companies were not, strictly speaking, purely open source software companies. They were interested in value creation, but they were very interested in value capture. Most of them had a hybrid business model to optimize for that fact, and the high expectations of their VCs.

Such an “open core” strategy, where a company like Elastic NV maintains an open source project (like Elasticsearch) but also provides additional enhancements as commercial software (like X-Pack), would be widely adopted by many of the companies on Joseph’s list.  This commercial software would only be available to paying customers. Thus even customers who used the open source Elasticsearch software via the AWS offering would still have plenty of reasons to deal with — and pay — Elastic NV directly.

Elastic NV also enhanced its own Elastic as a service cloud offering. The company innovated to improve both its open source core and its commercial add-ons. It got better at being able to deliver software as a service. It competed.

Coming soon: Part 2. The licensing war escalates. Where do we go from here?
