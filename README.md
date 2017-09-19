# mule-jenkins-docker
Test project for Mule - Jenkins -Docker Pipeline


MuleRuntimeDockerfile folder contains the Dockerfile that has the base mule esb community edition 3.8.1.
This docker image is published in the public registry docker hub under iipochi123 username

DockerfileForApp folder contains the Dockerfile that builds on top of the mule esb image deploying our application.

Dockerfile in the main folder creates a docker image for jenkins [ also includes docker , kubectl , maven]

Jenkins runs as a container inside a minikube pod , using Jenkinsfile which build the maven project ,  {{ builds the image and deploys to minikube }}


{{ ... }} -> Hitting a snag. I am not able to start the docker service inside the jenkins container  (is it because of something called running docker in docker ?)




