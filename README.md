# grafana.com/blog

This repo hosts the blog for the grafana.com website.
It's a static page generator based on Hugo.

## Small edits

For small edits you don't need to clone and build the repo.
Instead, open the file in GitHub, edit it, and open a PR with the change.
Once the PR is approved, the change will go live with the next deployment.

## Writing blog posts

To write a blog post and preview it locally, you need to install Hugo and some dependencies.

### Set up

Install the software needed to run the blog locally.
You should have to do this only once.

- Install Hugo, the static site generator

```bash
curl -sSL https://github.com/gohugoio/hugo/releases/download/v0.30.2/hugo_0.30.2_Linux-64bit.tar.gz \
	| sudo tar -v -C /usr/local/bin -xz \
  && sudo chmod 755 /usr/local/bin/hugo \
  && /usr/local/bin/hugo version
```

- Install nodejs, version 6 and above is fine, check with `node -v`

- Install bower, the dependency manager

```bash
npm install -g bower
```

> TODO is exactly 0.30.2 of Hugo needed?

### Build

To build and run the blog locally, do the following steps:

- Install dependencies if you have not used this repo in a while:

```bash
npm install
bower install
```

- Build and blog site and start a watcher for changes on modifying sass/html/md files

```bash
grunt # build it once
grunt watch
```

- In a second terminal start a webserver to serve the blog site locally on http://localhost:3002/

```bash
grunt connect
```

You should be able to see the blog site loading fine in the browser.

### Write blog post

> **First time writers**:
>
> Make sure an author file with your name exists under `data/authors/`
> If not, create a file under your name. See `david.yaml` for an example:
>
> ```yaml
> name: David Kaltschmidt
> imgUrl: /img/about/david_kaltschmidt.jpg
> ```
>
> Then add a square-shaped headshot under `static/img/about/`. Check out some existing ones to see what is required.

1. Blog posts are added under `content/blog/`. Look for recent blog post that fits your style and duplicate it.
2. Adjust the date in the filename and the header to a possible publishing date. Add a proper title.
3. Write the blog post.
4. Commit the post (and your author files if needed) to branch and open a PR.

### Publishing

Find someone who can publish the blog:
Daniel, Torkel, Anthony, Dan, Trent

## Admin

### To build the Docker image for docs:

make docs-build

### To publish

```bash
sudo pip install awscli
```

You'll need a awsconfig as well. Ask and you should find.

### To staging

```bash
./publish.sh
```

### To production

```bash
./publish.sh prod
```
