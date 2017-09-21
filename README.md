# mule-jenkins-docker
Mule project built as a container and deployed on Kubernetes via a Jenkins pipeline

## Structure

### app
Contains all the code needed for mule app. 

### jenkins
The deployment of Jenkins to Kubernetes and pipeline definitions

### mule_runtime
This directory is for building the base mule runtime image which can be used for other mule apps. Instead of replicating same code across multiple Dockerfiles, this will act as base for other images.

## Build and run
## Locally
For building and running the App locally using Docker you can simply build from the root directory. You will need Docker 17.06 or higher as multi-stage build is used

```
docker build -t mule-app .
```

## Kubernetes