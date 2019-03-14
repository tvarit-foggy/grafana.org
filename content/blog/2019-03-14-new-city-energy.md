+++
title = "How New City Energy Is Supporting Sustainability with Grafana"
author = "jdam"
date = "2019-03-14"
keywords = ["Grafana", "New City Energy", "GrafanaCon"]
cover_opacity = "0.4"
cover_blur = "1px"
description = "Oracle Cloud Infrastructure now has a Grafana datasource"
categories = ["Grafana", "GrafanaCon"]
excerpt = "How Grafana is enabling Washington D.C. to reduce energy costs as well as its carbon footprint."
+++

<img src="/assets/img/blog/timeshift/andrew_rodgers.jpg" alt="Andrew Rodgers - New City Energy"/>
<br />
<small>Andrew Rodgers - New City Energy</small>

Grafana isn’t just being used for monitoring applications. Andrew Rodgers, Senior Systems Architect at [New City Energy](http://www.newcityenergy.com/), spoke in Amsterdam at GrafanaCon EU 2018 about how his organization is using Grafana to measure energy usage in municipal buildings in Washington D.C. for the [Department of General Services](https://www.dgs.ca.gov/) (DGS). 

DGS manages infrastructure facilities for 28 million square feet of real estate in the District of Columbia. Of its half a billion dollars in operating costs of all these buildings, $100 million is spent on energy per year. 

In 2012, the city government established a division of addressing sustainability and energy, with a goal of carbon neutrality by 2050. A consultancy called [NCE](http://www.ncenet.com/) was brought in to help, and the first thing it did was build a platform called [BuildSmart DC](http://www.buildsmartdc.com/), which launched in the summer of 2013. 

### Making Energy Data Public

“It’s a publicly accessible portal that aggregates the energy consumption data for the entire D.C. municipal building portfolio for anyone to see,” said Rodgers. “It was groundbreaking because utilities in the U.S. don’t tend to share the data like you would hope. By putting that data in the public view, it also established a responsibility to the public from the D.C. government to address buildings that were, for example, using four times the national average for energy per square foot. It really provided a political cover for spending money on sustainability and efficiency.”

The portal is integrated with [VOLTTRON](https://www.energy.gov/eere/buildings/volttron), a U.S. Department of Energy-sponsored open source platform for transactional energy. “They envision this future where every time a device needs energy for something, it negotiates with the other devices in your house, and your house may negotiate with the other houses in your neighborhood to establish where that energy should come from,” said Rodgers. “How does it give you the best cost for the energy possible? How does it have the least environmental impact? You can build your market that makes these decisions around whatever metrics you want.”

The platform provides a framework for distributed sensing and control, with “sane security and trust defaults that allow you to build trusted distributed systems that can communicate with each other and negotiate these transactions or move data around,” Rodgers added. “It was a system built by researchers for researchers.”

### Improving a Transactional Energy Platform

As such, Rodgers said, a lot of work was needed to make the platform more suitable for commercial adoption. Rodgers started working on the project in 2016, focusing on drilling down from the energy level data of a building to what each piece of equipment in the building is doing. The next step was retro commissioning, which is figuring out the difference between what the system is doing and what it should be doing, and restoring it to the desired performance.

Systems need to respond to constantly changing conditions and demands for room temperature, for instance, as people enter or leave a room. 

“The focus on energy efficiency for mechanical engineers designing these systems has driven some really incredible innovations over the last few decades,” Rodgers said. “But they keep getting more and more complex, and if you don’t have that sort of continuous path into the facilities’ operators and all that complexity, suddenly you’ve designed something at one efficiency level, and the actual achieved is half of that.”

So one of the goals for the Built Environment portfolio for the city of D.C. is to define the metrics. “What you measure is what’s going to drive behavior,” Rodgers said. Knowing these metrics enables systems to reduce energy consumption as well as move it around in order to reduce the carbon footprint; for example, use wind energy when a lot of that is available. 

### Enter Grafana

The platform is now using Grafana to visualize these key metrics. Aside from reducing energy usage, an important goal of this initiative is to provide a comfortable and healthy workspace for the people in those municipal buildings. 

Rodgers has been working on disaggregating the energy and operational data into multiple temperature zones within a single room. “We want to address not just efficiency; we are not trying to run at the bare minimum,” said Rodgers. “We want to make sure that we’re delivering the amount of oxygen people need, that the CO2 levels are regulated correctly. Ventilation is important.” The room temperatures, the airflow, the temperature of the air flow, the number of watts going into cooling each area of the room all need to be measured, and then delivered in a usable way.

“Data qualIty is very important in this space,” said Rodgers. “So our approach is to address all that at the front end, make sure we’re doing the right kind of tagging. We want to be able to use this data at multiple levels of the organization. We want the facilities guy that’s onsite here to be able to pull up his phone and answer questions that can help him solve the day-to-day problems. We want the technicians who are solving deeper technical problems with the equipment to be able to dig in and troubleshoot individual points. And then we wanted to deliver this energy cost efficiency to the executive level people who are making decisions about which buildings to sell or buy. And then we also want to deliver this data to the public as well because there is this value in establishing this sort of political accountability to how these systems operate.”

Building equipment has multiple standards, but Rodgers and his team figured out ways to aggregate them into one standard. The IoT gateway running the VOLTTRON platform interrogates using that standard, pushes the data up the message bus into a [CrateDB](https://crate.io/) cluster on AWS. They then visualize out of Crate into Grafana. 

This system also uses [Prometheus](https://prometheus.io/), [Logstash](https://www.elastic.co/products/logstash), and [Elasticsearch](https://www.elastic.co/). 

The platform now monitors 46 buildings, pulling about 30,000 data points out of those buildings. In total, it collects about 2.7 million samples per day, with a corpus of almost a billion records. 

###  Technicians Building Dashboards

“Our dashboards are not beautiful,” Rodgers admitted, “but I am really proud of these because I didn’t build them.” Staying true to the goal of giving every level of the organization access to the metrics, they use dashboards used by actual HVAC technicians. 

<div class="row">
	<div class="col col--sm-6"><img src="/assets/img/blog/timeshift/new_city_dash1.jpg" /></div>
	<div class="col col--sm-6"><img src="/assets/img/blog/timeshift/new_city_dash2.jpg" /></div>
</div>
<div class="row">
	<div class="col col--sm-6"><img src="/assets/img/blog/timeshift/new_city_dash3.jpg" /></div>
	<div class="col col--sm-6"><img src="/assets/img/blog/timeshift/new_city_dash4.jpg" /></div>
</div>

Rodgers showed a number of them during his presentation. “Yes, there’s too much data up there, but the fact that I have nontechnical users using Grafana and doing the data discovery process is huge for me,” he said. “I think that’s where the value of these systems over the vendor-driven systems really shines in this particular segment. So this just allows a technician to pick a location or a building, then a type of equipment, and see all the data points associated with that. If someone’s calling about a particular room, they can dig in to the room level and see what’s going on in that room.”

Pretty or not, this platform has saved the District of Columbia $4 million to date, Rodgers said. “We’re sitting at about a million dollars a year in annual recurring savings on the energy side, 20 percent reduction at the sites that we’ve really focused on,” he said. “And we’ve established the retro commissioning process that is using this data. We’re on track for this year to deliver an additional half million dollars a year in recurring savings.”

### Looking Ahead

With such stellar results, what’s next for the platform? “We want to continue to develop the business processes,” Rodgers said. “The data doesn’t really matter if you’re not using it and making good decisions. We think that by really focusing on the right policies, especially at a municipal level, we’d love to influence commercial portfolio owners to adopt some of these practices to reduce the carbon footprint of the city at large.”

Constant commissioning is a top goal: “to use the data we’re collecting to find each little problem as it pops up, and solve it while it’s still addressable with the existing operations budget, before we end up needing a whole new $2 million mechanical system at this building,” he said. 

Distributed energy resource is another. “The next transactional energy paradigm is the ability to deliver demand reduction across a large scale using whatever assets you have,” Rodgers said. “Whether you have electric vehicles plugged into your building, a photovoltaic system on the roof, actual mechanical systems that you can shut down or slow down, the goal is to, across a large portfolio, achieve megawatt or larger cuts in your demand.

And on the front lines of facilities management, Rodgers said he wanted to give everyone the tools they need to take ownership of the challenge of sustainability in a building. “Maybe we have to build some simplified things,” he said, “but eventually we want to get them using Grafana.” 

While this system is now taking root in D.C., Rodgers said he has a greater mission: “We want to build the platform that enables this not just for D.C. but everywhere.”

##### Check out the full video of Andrew's talk below and [download his presentation slides](https://www.grafanacon.org/2018/presentations/Andrew_Rodgers_Bringing Observability to the Built Environment at City Scale_opt.pdf).

#### Video: Bringing Observability to the Built Environment at City Scale
<div class="video-wrapper">
	<iframe src="https://www.youtube.com/embed/bIikZxsUJgs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
