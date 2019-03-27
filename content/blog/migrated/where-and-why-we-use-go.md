---
title: "Where and Why We Use Go"
author: jeremyb
date: 2015-08-21
categories:
  - "Engineering"
aliases:
  - /where-and-why-we-use-go/
---

<a href="http://golang.org">Go</a>, while not the only part of our toolkit here at raintank, is an integral part of many of our projects. Let's spend a little bit of time exploring where and why we use it.

## Where we use Go

* [grafana](http://github.com/raintank/grafana) - While a lot of Grafana's code is javascript, Go powers Grafana's backend.
* [raintank-metric](http://github.com/raintank/raintank-metric) - This worker, which processes metrics received by Grafana and puts them into the backend TSDB, is written in Go.
* [raintank-probe](http://github.com/raintank/raintank-probe) - This currently runs the ping and DNS checks for our collector which is written in Node. Soon it will entirely replace the node collector and be the primary collector program, because it will run much more efficiently on small devices.
* We even use Go in a more unusual place -- we use <a href="http://goiardi.gl">goiardi</a> for our Chef server, which is of course written in Go.

## Why we like and use Go

* It's fast. It's not going to be as quick as a well written C program, but you can write a Go program a lot faster than a C program. At the same time, it'll be a lot faster than an equivalent program in perl or ruby.
* The <a href="#static">static*</a> binaries it builds are easy to deploy.
* It gives you a lot of freedom, but it doesn't let you yield to the temptation of proving how cool you are by doing weird pointer arithmetic for no other reason than you can.
* You can build your programs for many different platforms. It's not (usually) an ordeal to compile a program to run on Linux, Solaris, Mac OS X, Windows or the BSDs on am64, i686, or arm, unless the program or its libraries use platform-specific code without implementations of that functionality on other platforms. You can probably even build your program for plan9, assuming that the libraries you're using don't refuse to support it. If you have a less common platform, you might not be out of luck; if you can compile the program with <a href="https://golang.org/doc/install/gccgo" target="_blank">gccgo</a>, you can use that old VAX you have laying around to run the collector<a href="#vax">**</a>.
* It makes backend and systems programming much more accessible. There's a lot of power in a simple, elegant language.
* The profiling tools are great, and very useful. Already we use the CPU and heap profiling tools a lot, and are looking forward to the trace profiling that arrived with go 1.5.
* Concurrency is built into go, and it's very easy to work with.
* Go's interfaces can take some time to wrap your brain around, but once you do you'll wonder how you ever lived without them.
* This is purely a personal preference, but I enjoy working in Go.

## The Downsides

Go is not, of course, all Skittlebrau and donuts. Like every tool, there are certain downsides to using Go. None of these are showstoppers, nor will any of them be news to experienced gophers, but they're worth being aware of:

* The build system can be very frustrating, especially if you're trying to do anything non-standard. Right now, <a href="https://github.com/raintank/grafana#run-from-master" target="_blank">we have to do a weird symlink thing</a> to build the <a href="https://github.com/raintank/grafana" target="_blank">raintank grafana fork</a>.
* No versioning of dependencies by default. You'll either need to jump through some hoops and use something like <a href="https://github.com/tools/godep" target="_blank">godep</a> to import particular versions of your dependencies, or just hope for the best and update your package if the dependencies change from under you and break your whole build.
* It's easy to be inefficient with memory allocation. You don't have to free it yourself, at least, but sometimes it's worthwhile to be smarter about how you allocate slices and maps and not let the runtime reallocate slices and maps for you.
* Use the right tool for the job. You can do text processing in Go, sure, but for really big text processing jobs you should consider if you're better off just using perl.

----

Even with those small caveats, though, Go is a great language for our needs, and suits us very well. Like many people we've built some neat stuff with it, and I look forward to making even more software in Go in the future. With the <a href="http://blog.golang.org/go1.5">recent release</a> of version 1.5, Go continues advancing by leaps and bounds. Compared to when I started using Go, back in the 1.1 days, there aren't a lot of major changes in the language, but there have been a lot of little changes and improved tooling. Changes to the garbage collector and stack size or adding static analysis to `go doc` or `go generate`, taken individually, may or may not have a lot of impact but in the aggregate make it easier to develop programs that are more performant and use fewer resources.

<a name="static">*</a>  These binaries are, of course, not entirely static (if you run `ldd` on a go binary you'll likely notice that it is dynamically linked to libc, libpthread, libdl, etc.), so calling go binaries "static" is not entirely accurate. Those libraries are going to be pretty much anywhere you'd be copying the binary to anyway, so I wouldn't worry about it. You might have some trouble getting it to run on that Slackware 3.6 box though.

<a name="vax">**</a> I can't promise any raintank software will successfully run on VMS. If you're determined to run the collector on a VAX, NetBSD might be your best bet.

