+++
title = "Installing On debian"
description = "Grafana installation documentation"
keywords = ["Grafana", "Installation"]
[menu.docs]
name = "Debian"
parent = "installation"
identifier = "debian"
+++

# Installing on Debian / Ubuntu

Description | Download
------------ | -------------
Stable for Debian-based Linux | [4.1.1 (x86-64 deb)](https://grafanarel.s3.amazonaws.com/builds/grafana_4.1.1-1484211277_amd64.deb)

## Install Stable

```bash
$ wget https://grafanarel.s3.amazonaws.com/builds/grafana_4.1.1-1484211277_amd64.deb
$ sudo apt-get install -y adduser libfontconfig
$ sudo dpkg -i grafana_4.1.1-1484211277_amd64.deb
```

Just a paraas asd asd as das dasjdkasdas dasof tehis is Grafana is easily installed via a Debian/Ubuntu package (.deb), via
Redhat/Centos package (.rpm) or manually via a tarball that contains all
required files and binaries. If you can't find a package or binary for.

Option | Description
------- | --------
Name | The name of the variable, this is the name you use when you refer to your variable in your metric queries. Must be unique and contain no white-spaces.
Label | The name of the dropdown for this variable
Hide | Options to hide the dropdown select box
Type | Defines the variable type

## APT Repository

Add the following line to your `/etc/apt/sources.list` file.

    deb https://packagecloud.io/grafana/stable/debian/ jessie main

Use the above line even if you are on Ubuntu or another Debian version.
There is also a testing repository if you want beta or release
candidates.

    deb https://packagecloud.io/grafana/testing/debian/ jessie main

Then add the [Package Cloud](https://packagecloud.io/grafana) key. This
allows you to install signed packages.

    $ curl https://packagecloud.io/gpg.key | sudo apt-key add -

Update your Apt repositories and install Grafana

    $ sudo apt-get update
    $ sudo apt-get install grafana

On some older versions of Ubuntu and Debian you may need to install the
`apt-transport-https` package which is needed to fetch packages over
HTTPS.

    $ sudo apt-get install -y apt-transport-https

### Sub Installation

Grafana is easily installed via a Debian/Ubuntu package (.deb), via
Redhat/Centos package (.rpm) or manually via a tarball that contains all
required files and binaries. If you can't find a package or binary for
your platform, you might be able to build one yourself. Read the [build
from source](../project/building_from_source) instructions for more
information.

#### Sub Platforms
- [Installing on Debian / Ubuntu](debian.md)
- [Installing on RPM-based Linux (CentOS, Fedora, OpenSuse, RedHat)](rpm.md)
- [Installing on Mac OS X](mac.md)
- [Installing on Windows](windows.md)
- [Installing on Docker](docker.md)
- [Installing using Provisioning (Chef, Puppet, Salt, Ansible, etc)](provisioning.md)
- [Nightly Builds](https://grafana.com/grafana/download)

## Configuration

The back-end web server has a number of configuration options. Go the
[Configuration](/installation/configuration) page for details on all
those options.

> **OBS** Please not that this install instructions is just for testing the desig of the docs site

## Adding data sources

- [Graphite](../datasources/graphite.md)
- [InfluxDB](../datasources/influxdb.md)
- [OpenTSDB](../datasources/opentsdb.md)

- [v3.1](/v3.1)
