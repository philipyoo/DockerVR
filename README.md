# DockerVR

Result of a 24 hour hackathon, DockerVR was inspired by [Dockercraft](https://github.com/docker/dockercraft).

For this project, we wanted to use [AFrame VR](https://aframe.io/) as our VR framework to manage docker containers in a virtual setting. Other technologies included ElectronJS, NodeJS, Docker, and [dockerode](https://github.com/apocas/dockerode).

As we were building out our project, we were met with many roadblocks when using AFrame. Many of the functionalities we were planning on implementing were not yet supported by AFrame. That coupled with our lack of knowledge using AFrame led to several adjustments made during development. We were able to add event handlers to the container images, but in a very roundabout way haha..

The final product we were able to showcase were simple creation of Docker containers limited to a single Docker Image. This can be easily fixed by adding another input field at top and error handler to catch invalid inputs.