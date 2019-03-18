# Blog (grafana.com/blog) and documentation assets

This repo hosts the blog for the grafana.com website.
It's a static page generator based on Hugo.

It also hosts all images for the documentation, as well as the Dockerfile for the build image needed to deploy docs (this is not needed for blog publishing).

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

  (Note: The exact version 0.30.2 is needed only for the person doing the publishing, since recent versions break version switching of the docs site. If you plan to write blog posts only, then a recent version of hugo is fine, and may be installed via `brew install hugo`, allowing you to skip the manual install below.)

  Linux:

  ```bash
  curl -sSL https://github.com/gohugoio/hugo/releases/download/v0.30.2/hugo_0.30.2_Linux-64bit.tar.gz \
  \
    && sudo chmod 755 /usr/local/bin/hugo \
    && /usr/local/bin/hugo version
  ```

  Mac:

  ```bash
  curl -sSL https://github.com/gohugoio/hugo/releases/download/v0.30.2/hugo_0.30.2_macOS-64bit.tar.gz \
  \
    && sudo chmod 755 /usr/local/bin/hugo \
    && /usr/local/bin/hugo version
  ```

- Install nodejs, version 6 and above is fine, check with `node -v`

- Install bower, the dependency manager and grunt, the task runner

```bash
npm install -g bower
npm install -g grunt
```

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

### To publish the blog

You'll need a awsconfig as well. Ask and you should find.

```bash
sudo pip install awscli
```

**Deployment**

Deploy the current blog to staging. Needs hugo version `0.30.2`.

```bash
./publish.sh
```

Verify the blog on the staging website: https://staging.grafana.com/blog/

If everything is in order, publish to production:

```bash
./publish.sh prod
```

Verify the blog in production: https://grafana.com/blog/

### To build the Docker image for docs:

This repo includes the Dockerfile and assets to build the grafana docs.
It will include the assets from this repo and then combine them with the docs from the grafana repo.

Build the Docker image used to deploy docs:

```bash
make docs-build
```

Then continue in the grafana repo.
