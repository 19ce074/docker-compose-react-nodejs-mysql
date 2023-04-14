# Docker-compose-react-nodejs-mysql
In this project the frontend is on react, the backend is on node, and the databse used is mysql.

---

## Docker file structure:
There are 2 docker files each for front-end and back-end.

The docker file for the fontend is multi-stage.

---

## Cloning the project:
Use ```git clone <url> ``` in your command window to clone the project.

cd into the directory created.

---

## Installing docker on you local machine
One click installation script:
```
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```
Run docker as non root user:
```
sudo groupadd docker
sudo usermod -aG docker $USER
```
Install Docker Engine : [Docker Engine](https://docs.docker.com/engine/install/)

Install docker compose plugin :<br/>
For Ubuntu and Debian, run:

```
sudo apt-get update
sudo apt-get install docker-compose-plugin

```
For RPM-based distros, run:

```
sudo yum update
sudo yum install docker-compose-plugin

```
---

## Starting the containers:
In your command line just type ```docker-compose up``` to build and run the container.

Let it build for a moment then open your browser and enter localhost:5000. 
The website should be running and database is connected.

