FROM circleci/node:7.10
RUN sudo apt-get -y -qq install awscli
RUN curl -sSL https://github.com/gohugoio/hugo/releases/download/v0.30.2/hugo_0.30.2_Linux-64bit.tar.gz | sudo tar -v -C /usr/local/bin -xz && \
    sudo chmod 755 /usr/local/bin/hugo && \
    /usr/local/bin/hugo version
RUN sudo npm install -g bower grunt