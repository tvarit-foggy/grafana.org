+++
title = "timeShift(GrafanaBuzz, 1w) Issue 81"
author = "trent"
date = "2019-03-15"
keywords = ["Grafana", "Blog", "Roundup", "timeShift", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "TimeShift is back after a few weeks away with a lot of updates to share. GrafanaCon LA videos and presentations, details on Grafana v6.0.1, upcoming events we’ll be speaking at, and more!"
+++

### Welcome to TimeShift
TimeShift is back after a few weeks away with a lot of updates to share. Nearly all of the [Videos and presentations](http://grafanacon.org/2019/videos) from GrafanaCon LA are available, so please check them out and let us know what you think. Also, if you hadn't heard, Grafana v6.0 stable was recently released which has lots of new features and enhancements. Download the latest version v6.0.1 and read about the highlights below.

See an article we missed? [Contact us](mailto:hello@grafana.com).

<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h3>Latest Stable Release: Grafana v6.0.1</h3>
		<h5>Bug Fixes</h5>
		<ul>
			<li><strong>Metrics</strong>: Fixes broken usagestats metrics for /metrics <a href="https://github.com/grafana/grafana/issues/15651" rel="nofollow noopener">#15651</a></li>
			<li><strong>Dashboard</strong>: Fixes kiosk mode should have &amp;kiosk appended to the url <a href="https://github.com/grafana/grafana/issues/15765" rel="nofollow noopener">#15765</a></li>
			<li><strong>Dashboard</strong>: Fixes kiosk=tv mode when autofitpanels should respect header <a href="https://github.com/grafana/grafana/issues/15650" rel="nofollow noopener">#15650</a></li>
			<li><strong>Image rendering</strong>: Fixed image rendering issue for dashboards with auto refresh, . <a href="https://github.com/grafana/grafana/pull/15818" rel="nofollow noopener">#15818</a>, <a href="https://github.com/torkelo" rel="nofollow noopener">@torkelo</a></li>
			<li><strong>Dashboard</strong>: Fix only users that can edit a dashboard should be able to update panel json. <a href="https://github.com/grafana/grafana/pull/15805" rel="nofollow noopener">#15805</a>, <a href="https://github.com/marefr" rel="nofollow noopener">@marefr</a></li>
			<li><strong>LDAP</strong>: Fix allow anonymous initial bind for LDAP search. <a href="https://github.com/grafana/grafana/pull/15803" rel="nofollow noopener">#15803</a>, <a href="https://github.com/marefr" rel="nofollow noopener">@marefr</a></li>
			<li><strong>UX</strong>: Fixed scrollbar not visible initially (only after manual scroll). <a href="https://github.com/grafana/grafana/pull/15798" rel="nofollow noopener">#15798</a>, <a href="https://github.com/torkelo" rel="nofollow noopener">@torkelo</a></li>
			<li><strong>Datasource Admin</strong>: TestData <a href="https://github.com/grafana/grafana/pull/15793" rel="nofollow noopener">#15793</a>, <a href="https://github.com/hugohaggmark" rel="nofollow noopener">@hugohaggmark</a></li>
			<li><strong>Dashboard</strong>: Fixed scrolling issue that caused scroll to be locked to bottom. <a href="https://github.com/grafana/grafana/pull/15792" rel="nofollow noopener">#15792</a>, <a href="https://github.com/torkelo" rel="nofollow noopener">@torkelo</a></li>
			<li><strong>Explore</strong>: Viewers with viewers_can_edit should be able to access /explore. <a href="https://github.com/grafana/grafana/pull/15787" rel="nofollow noopener">#15787</a>, <a href="https://github.com/jschill" rel="nofollow noopener">@jschill</a></li>
			<li><strong>Security</strong>: Fixes limit access to org admin and alerting pages. <a href="https://github.com/grafana/grafana/pull/15761" rel="nofollow noopener">#15761</a>, <a href="https://github.com/marefr" rel="nofollow noopener">@marefr</a></li>
			<li><strong>Panel Edit</strong>: MinInterval changes did not persist <a href="https://github.com/grafana/grafana/pull/15757" rel="nofollow noopener">#15757</a>, <a href="https://github.com/hugohaggmark" rel="nofollow noopener">@hugohaggmark</a></li>
			<li><strong>Teams</strong>: Fixes bug when getting teams for user. <a href="https://github.com/grafana/grafana/pull/15595" rel="nofollow noopener">#15595</a>, <a href="https://github.com/hugohaggmark" rel="nofollow noopener">@hugohaggmark</a></li>
			<li><strong>Stackdriver</strong>: Fix for float64 bounds for distribution metrics <a href="https://github.com/grafana/grafana/issues/14509" rel="nofollow noopener">#14509</a></li>
			<li><strong>Stackdriver</strong>: No reducers available for distribution type <a href="https://github.com/grafana/grafana/issues/15179" rel="nofollow noopener">#15179</a></li>
		</ul>
		<p>Check out all the <a href="http://docs.grafana.org/guides/whats-new-in-v6-0/?utm_source=blog&utm_campaign=timeshift_81" target="_blank">new features and enhancements</a> in v6.0</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_81" target="_blank" class="btn btn--primary">Download Grafana v6.0.1 Now</a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**The Linux Foundation Launches New CommunityBridge Platform to Help Sustain Open Source Communities**](https://www.linuxfoundation.org/press-release/2019/03/the-linux-foundation-launches-new-communitybridge-platform-to-help-sustain-open-source-communities/): The Linux Foundation recently announced CommunityBridge – a new platform created to empower open source developers and the individuals and organizations who support them – and Grafana Labs is thrilled to be part of the platform!

[**Grafana | DigitalOcean Marketplace**](https://marketplace.digitalocean.com/apps/grafana): Grafana is one of the first 1-click Apps on the new DigitalOcean Marketplace.

[**Why You Should Be Using Grafana With OCI**](https://blogs.oracle.com/developers/why-you-should-be-using-grafana-with-oci): We recently announced the release of [Oracle Cloud Infrastructure as a Data Source for Grafana](https://grafana.com/blog/2019/02/25/oracle-cloud-infrastructure-as-a-data-source-for-grafana/). In a follow up post on the Oracle Blog, Todd Sharp describes the immediate benefits he realized when he created his first OCI dashboard in Grafana and why you should be using it.

[**How New City Energy Is Supporting Sustainability with Grafana**](https://grafana.com/blog/2019/03/14/how-new-city-energy-is-supporting-sustainability-with-grafana/): In this talk from GrafanaCon EU 2018, Andrew Rodgers shows how Grafana is enabling Washington D.C. to reduce energy costs as well as its carbon footprint.

[**Remote monitoring and alerting for IoT**](https://cloud.google.com/solutions/remote-monitoring-and-alerting-for-iot): Learn how to set up remote monitoring and alerting for IoT devices using Google Cloud Platform, Prometheus, and Grafana.

[**Container resources’ request/limit/usage metrics**](https://medium.com/@github.gkarthiks/container-resources-request-limit-usage-metrics-5ad2b5e822b5?sk=24110479a0e08a7cd99b3c18ba22a74c): This article discusses the Container Resource Exporter (CRE) for Prometheus which captures containers’ resource request quantity, limit quantity and current usage in real-time and triggers a proactive alert when a certain threshold of our choice is crossed. These metrics are printed in the Prometheus metric text format for easy visualization in Grafana.

[**Prometheus: RTFM blog monitoring set up with Ansible – Grafana, Loki, and promtail**](https://rtfm.co.ua/en/prometheus-rtfm-blog-monitoring-set-up-with-ansible-grafana-loki-and-promtail/): In this post, [setevoy](https://rtfm.co.ua/en/about-2/) describes the Prometheus, node_exporter, Grafana, Loki, and promtail set up process. He also includes some of the minor issues he encountered during the process and troubleshooting he conducted to help make things a little easier for others.

[**[VIDEO] Monitoring Open Liberty with Prometheus & Grafana**](https://blog.sebastian-daschner.com/entries/openliberty-monitoring-prometheus-grafana): Learn how to add monitoring to Open Liberty instances using Prometheus and Grafana. In this video, learn how to configure Open Liberty and how to run the instance together with a database and Prometheus in a Kubernetes cluster. Then, take a look at an example Grafana dashboard you can easily [import](https://grafana.com/dashboards/9595) to visualize that data.

[**How to Get Started Using CrateDB and Grafana to Visualize Time-Series Data**](https://dzone.com/articles/how-to-get-started-using-cratedb-and-grafana-to-vi): This is a quick walkthrough of how to get up and running with CrateDB and Grafana. In only a few minutes you'll learn how to install both CrateDB and Grafana, generate some data, add a PostgreSQL data source, and visualize the data you generated on a new Grafana dashboard.

[**3D Printer OctoPrint Monitoring with Prometheus and Grafana**](http://www.smbaker.com/3d-printer-octoprint-monitoring-with-prometheus-and-grafana): Dr. Scott M. Baker wrote a Prometheus plugin in order to keep track of stats of his 3D Printer; things like power usage, temperature, extrusion, filament usage, etc. This video and accompanying blog article takes you through some of the specifics and how you can install and start using the plugin.

[**Why You Want Easy-to-Setup Grafana Dashboards**](https://thenewstack.io/why-you-want-easy-to-setup-grafana-dashboards/): Find out what you have to gain by setting up Grafana dashboards and the easy steps involved.

[**Phenomenal Outages**](https://phenomenaloutages.tumblr.com/): This Tumblr gallery is a great example of "data as art." As its tagline states: outages don’t have to be inelegant.


<br />
<hr />

#### Upcoming Events
In between code pushes we like to speak at, sponsor and attend all kinds of conferences and meetups. We also like to make sure we mention other Grafana-related events happening all over the world. If you're putting on just such an event, let us know and we'll list it here.

<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/meetup.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://www.meetup.com/Go-Stockholm/events/259569474/" target="_blank">Go Meetup at Grafana Labs | Stockholm, Sweden - 03.20.19, 5:30 PM to 9:00 PM CET</a>:</strong>
			</p>
			<p>
				Join us at the Grafana Labs Stockholm office for an evening of hacking on code, talking about Go, or just having a good time meeting other Gophers.
				If you want to write some code then bring a computer.
				Maybe you have a side project that you want to present or get input on?
			</p>
			<p>Agenda:
				<ul>
					<li>17:30 - 18:00 Meet and greet</li>
					<li>18:00 - 18:10 Welcome</li>
					<li>18:10 - 21:00 Hacking/Talking</li>
				</ul>
			</p>
			<p>NOTE: This event has reached capacity, but you can still join the waiting list.</p>
			<a href="https://www.meetup.com/Go-Stockholm/events/259569474/" target="_blank" class="btn btn--outline">Learn More</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/webinar.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://dzone.com/webinars/why-open-source-works-for-devops-monitoring" target="_blank">Webinar: Why Open Source Works for DevOps Monitoring | 03.26.19, 1PM EDT</a>:</strong>
			</p>
			<p>
				Learn how to use open source tools for your performance monitoring of your stacks, systems, and sensors in a way that is faster, easier, and to scale.
			</p>
			<p>
				In this webinar, Jacob Lisi from Grafana, and Chris Churilo from InfluxData will provide you with step by step instruction on how to use InfluxDB with Grafana, two popular open source projects, to capture and analyze untapped data from virtual and physical assets, giving you new visibility to customer experience and business growth.
			</p>
			<a href="https://dzone.com/webinars/why-open-source-works-for-devops-monitoring" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/devopsdays.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://www.eventbrite.ca/e/devops-days-vancouver-2019-mar-29th-30th-tickets-53622560522" target="_blank">DevOps Days Vancouver 2019 | Vancouver BC, Canada - 03.29.19-03.30.19</a>:</strong>
			</p>
			<p>
				<strong>Callum Styan: Grafana Loki - Log Aggregation for Incident Investigations</strong> - Get an inside look at Grafana Labs' latest open source log aggregation project Loki, and learn how to better investigate issues using Grafana's new Explore UI.
			</p>
			<a href="https://www.eventbrite.ca/e/devops-days-vancouver-2019-mar-29th-30th-tickets-53622560522" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/kubecon_18.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2019/register" target="_blank">KubeCon + CloudNativeCon Europe 2019 | Barcelona, Spain - 05.20.19-05.23.19</a>:</strong>
			</p>
			<p>
				<strong>May 21 - Tom Wilkie, Intro: Cortex<br />
				May 22 - Tom Wilkie, Deep Dive: Cortex</strong><br />
				Cortex provides horizontally scalable, highly available, multi-tenant, long term storage for Prometheus metrics, and a horizontally scalable, Prometheus-compatible query API. Cortex allows users to deploy a centralized, globally aggregated view of all their Prometheus instances, storing data indefinitely. In this talk we will discuss the benefits of, and how to deploy, a fully disaggregated, microservice oriented Cortex architecture. We'll also discuss some of the challenges operating Cortex at scale, and what the future holds for Cortex. Cortex is a CNCF sandbox project.
			</p>
			<p>
				<strong>May 23 - Tom Wilkie, Grafana Loki: Like Prometheus, But for logs.</strong><br />
				Loki is a horizontally-scalable, highly-available log aggregation system inspired by Prometheus. It is designed to be cost effective and easy to operate, as it does not index the contents of the logs, but rather labels for each log stream.
			</p>
			<p>
				Loki initially targets Kubernetes logging, using Prometheus service discovery to gather labels for log streams. As such, Loki enables you to easily switch between metrics and logs, streamlining the incident response process - a workflow we have built into the latest version of Grafana.
			</p>
			<p>
				In this talk we will discuss the motivation behind Loki, its design and architecture, and what the future holds. Its early days after the launch at KubeCon Seattle, but so far the response to the project has been overwhelming, with more the 4.5k GitHub stars and over 12hrs at the top spot on Hacker News.
			</p>
			<p>
				<strong>May 23 - David Kaltschmidt, Fool-Proof Kubernetes Dashboards for Sleep-Deprived Oncalls</strong><br />
				Software running on Kubernetes can fail in various, but surprisingly well-defined ways. In this intermediate-level talk David Kaltschmidt shows how structuring dashboards in a particular way can be a helpful guide when you get paged in the middle of the night. Reducing cognitive load makes oncall more effective. When dashboards are organized hierarchically on both the service and the resource level, troubleshooting becomes an exercise of divide and conquer. The oncall person can quickly eliminate whole areas of problems and zone in on the real issue. At that point a single service or instance should have been identified, for which more detailed debugging can take place.
			</p>
			<a href="https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2019/register" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/monitorama_18.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://monitorama.com/" target="_blank">Monitorama PDX 2019 | Portland, OR - 06.03.19-06.05.19</a>:</strong>
			</p>
			<p>
				<strong>Tom Wilkie: Grafana Loki - Prometheus-inspired open source logging</strong> -  Imagine if you had Prometheus for log files. In this talk we'll discuss Grafana Loki, our attempt at creating just that.
			</p>
			<a href="https://monitorama.com/" target="_blank" class="btn btn--outline">Learn More</a>
		</div>
	</div>
</div>


<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-4">
		<h4>We're Hiring</h4>
	<p>Have fun solving real world problems building the next generation of open source tools from anywhere in the world. Check out all of our current opportunities on our careers page.</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_81" target="_blank">View All our Open Positions</a>
	</div>
	<div class="col col--sm-8">
		<a href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_81" target="_blank">
			<img src="/assets/img/blog/timeshift/careers_section.jpg" />
		</a>
	</div>
</div>

<hr />
<br />

<div>
	<div class="row row--no-gutters">
		<div class="col col--sm-12">
			<h4>Tweet of the Week</h4>
			We scour Twitter each week to find an interesting/beautiful dashboard or monitoring related tweet and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Working on an upcoming Bar Gauge visualization in <a href="https://twitter.com/grafana?ref_src=twsrc%5Etfw">@Grafana</a>, will have different looks, LCD , gradient, translucent etc :) Starting to come together, just need to add the series name in repeat mode. <a href="https://twitter.com/hashtag/monitoringlove?src=hash&amp;ref_src=twsrc%5Etfw">#monitoringlove</a> <a href="https://twitter.com/hashtag/datavisualization?src=hash&amp;ref_src=twsrc%5Etfw">#datavisualization</a> <a href="https://t.co/7t0JjQb7kn">pic.twitter.com/7t0JjQb7kn</a></p>&mdash; Torkel Ödegaard (@torkelo) <a href="https://twitter.com/torkelo/status/1106655859344584704?ref_src=twsrc%5Etfw">March 15, 2019</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>We don't normally share our own tweets, but this one was too beautiful to pass up.</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
We're always looking to make TimeShift better. If you have feedback, please let us know! Email or send us a tweet, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_81).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_81).
