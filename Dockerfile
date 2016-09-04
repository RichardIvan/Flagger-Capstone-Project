FROM gcr.io/google_appengine/nodejs

# ENV HOME /root
# ENV DEBIAN_FRONTEND noninteractive
ENV GITHUB_REPOSITORY https://github.com/RichardIvan/
ENV GITHUB_PROJECT Flagger-Capstone-Project

# RUN apt-get update -qq

# Install and configre SSH server
RUN apt-get update && apt-get install -y openssh-server
RUN mkdir /var/run/sshd
RUN echo 'root:passthrough' | chpasswd
RUN sed -i 's/PermitRootLogin without-password/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd
ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

# Install Watchman
RUN apt-get -y install make autoconf git libpython-dev
RUN mkdir ../nuclide \
	&& cd ../nuclide \
	&& git clone https://github.com/facebook/watchman.git \
	&& cd watchman \
	&& git checkout v4.6.0 \
	&& ./autogen.sh \
	&& ./configure \
	&& make && make install

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 6.2.2

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.3/install.sh | bash \
		&& source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Install Nuclide Remote Server
RUN npm install -g nuclide@0.159.0

USER root
RUN apt-get install libelf1 \
	&& npm i -g flow-bin

RUN npm i -g gulp \
	&& npm link gulp

# Install CommitZen
RUN npm i -g commitizen

# copy project and setup the directory for development
RUN cd ../app \
	&& git clone ${GITHUB_REPOSITORY}${GITHUB_PROJECT}.git ${GITHUB_PROJECT}; shopt -s dotglob nullglob; mv ${GITHUB_PROJECT}/* .; rmdir ${GITHUB_PROJECT}

# install project dependencies
RUN cd ../app && npm i

EXPOSE 9090-9093
EXPOSE 22
EXPOSE 443
EXPOSE 8080
EXPOSE 3000
# ADD ./startup.sh /opt/startup.sh

# Start ssh service
# ENTRYPOINT ["/opt/startup.sh"]
CMD ["/usr/sbin/sshd", "-D"]
