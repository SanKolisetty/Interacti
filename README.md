# Interacti

Interacti is a web application that can answer any queries asked by the user. The queries are sent to text davinci 003 model of OPENAI through API calls and the response generated is received.

# Table of Contents

- [Interacti](#interacti)
- [Table of Contents](#table-of-contents)
- [Brief Overview](#brief-overview)
- [Demo](#demo)
- [Installation](#installation)
- [Frontend](#frontend)
- [Backend](#backend)

# Brief Overview
[(Back to top)](#table-of-contents)

In this web application, the user can ask any queries. These queries will be sent to text davinci 003 model of OPENAI using OPENAI key. The responses generated are received and shown to the user.

# Demo
[(Back to top)](#table-of-contents)

https://github.com/SanKolisetty/Interacti/assets/95172001/ecad2d62-9ea9-41ca-be42-16d63df03328

This video shows the basic features of the web application

https://github.com/SanKolisetty/Interacti/assets/95172001/bc7b5a83-63e3-4499-91c4-121cfd4266f2

This video is a demonstration of the chat feature in Interacti.

# Installation
[(Back to top)](#table-of-contents)

Open Git Bash and change the directory to the location where the repository is to be cloned. Then, type the following commands.

```shell
  git init
```
```shell
  git clone https://github.com/SanKolisetty/AI-Image-Classifier.git
```
Go to the client directory

```shell
  cd client
```
Run the following command to install the necessary requirements

```shell
  npm install
```
Run the following command to open the application in local host

```shell
   npm run dev
```
Go to a new terminal and run the following command to go to the server directory

```shell
  cd server
```
Run the following commands to install the necessary requirements and to host the server

```shell
  npm install
```
```shell
  npm run server
```
Now, the application is functional. Do ask your queries!

# Frontend
[(Back to top)](#table-of-contents)

Frontend was designed using HTML, CSS and JavaScript. HTML was used to create the structure of the website, CSS for the designing and JavaScript to handle the events associated with the web application.

![image](https://github.com/SanKolisetty/Interacti/assets/95172001/51d49917-4c6c-4718-8ef1-0d953f1fb767)

Home Page



![image](https://github.com/SanKolisetty/Interacti/assets/95172001/f53b6e96-914b-46e7-aea6-d58c9a4d315d)

Chat Feature



![image](https://github.com/SanKolisetty/Interacti/assets/95172001/268a2971-ed1c-41ca-b5ce-6594fdeddb67)

About Page

# Backend
[(Back to top)](#table-of-contents)

The backend of the project is developed using Node.js. Express.js, dotenv, cors have been used to send requests made by the user(frontend) to the server. OpenAI's model text-davinci 003 has been used to generate responses to the queries asked by the user.
