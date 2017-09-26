FROM maven:3-jdk-8 as build_app
RUN mkdir -p /tmp/app
COPY app /tmp/app/
WORKDIR /tmp/app
RUN mvn clean package -DskipTests=true

FROM iipochi123/mule-esb
ENV MULE_HOME /opt/mule
COPY --from=build_app /tmp/app/target/twitter-mule-1.0.0-SNAPSHOT.zip $MULE_HOME/apps/
EXPOSE 8081:8081