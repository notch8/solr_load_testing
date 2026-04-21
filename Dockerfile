FROM alpine:3.21

ARG JMETER_VERSION=5.6.3
ENV JMETER_HOME=/opt/apache-jmeter-${JMETER_VERSION}
ENV JMETER_BIN=${JMETER_HOME}/bin
ENV PATH=${JMETER_BIN}:${PATH}
ENV JVM_ARGS="-Xms2048m -Xmx2048m"

RUN apk update \
  && apk upgrade \
  && apk add --update openjdk11-jre tzdata curl bash \
  && apk add --no-cache nss \
  && rm -rf /var/cache/apk/* \
  && mkdir -p /tmp/dependencies \
  && curl -L --silent https://archive.apache.org/dist/jmeter/binaries/apache-jmeter-${JMETER_VERSION}.tgz \
     > /tmp/dependencies/apache-jmeter-${JMETER_VERSION}.tgz \
  && mkdir -p /opt \
  && tar -xzf /tmp/dependencies/apache-jmeter-${JMETER_VERSION}.tgz -C /opt \
  && rm -rf /tmp/dependencies

WORKDIR ${JMETER_HOME}

ENTRYPOINT ["jmeter"]
