# mule-jenkins-docker-k8s
Test project for Mule - Jenkins -Docker-K8s Pipeline

Dockerfile in the folder "Docker file for Mule Runtime" creates a docker image that has the mule run time 3.8.1 community edition

Docker file in the "Docker file for App" creates another docker image that loads the application zip file on top of the image create above [ expects the above image name as mule-esb ]

Run the image created from the above step.

Application can be accessed from http://localhost:8081/viewtweets?q="WhateverQueryYouWant"


TODO
  Add the maven build step in the docker file or in jenkins
  Create docker image using Jenkins.
  Use k8s
  
