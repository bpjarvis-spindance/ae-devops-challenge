# ae-devops-challenge
## Architecture
This demonstration application makes use of docker to provide micro-services which contain the components of the application.  Micro-services are:

 - **cache**: Docker container running Redis key/value pair data store.  This container is an unmodified community image.
 - **web**: Docker container running a Node/Express web application which fulfills the requirements of the Auction Edge DevOps Challenge: [https://bitbucket.org/snippets/auctionedge/bedx7q/devops-challenge-2018](https://bitbucket.org/snippets/auctionedge/bedx7q/devops-challenge-2018).  This container includes the node runtime as well as the javascript application code and module dependencies.

Docker-compose is used to orchestrate startup and communication between the two services.

## Prerequsites

 - Development workstation must have
	 - Docker
	 - Docker-compose
## Build web application docker image
 - Clone this repository
 - cd to the root of the repository
 - Make any updates to the javascript code.
 - Build docker image: `docker build -t <username>/<image-name> .`
 
 ## Running the application
 
 - cd to the root of the repository
 - Run `docker-compose up`
## Accessing the Application
Point a browser to: 

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0MTA5OTkyNDZdfQ==
-->