# ae-devops-challenge
## Architecture
This demonstration application makes use of docker to provide micro-services which contain the components of the application.  Micro-services are:

 - cache: Docker container running Redis key/value pair data store.
 - web: Docker container running a Node/Express web appli

## Prerequsites

 - Development workstation must have
	 - Docker
	 - Docker-compose
## Build web application docker image
 - Clone this repository
 - cd to the root of the repository
 - Make any updates to the javascript code.
 - Build docker image: `docker build -t <username>/<image-name> .`

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4NTc3MjkwOTVdfQ==
-->