---
order: 3
title: GeoBattle
description: GeoBattle is a real-time web application where you can battle your friends for the most points. You gain points by correctly guessing a location based on a satellite image. I've used websockets to transfer all the data real-time between the server and client(s).
timestamp: 1619690400
live: https://geobattle.victorboucher.dev/
tech: Html, Sass, TypeScript, React, NodeJS, MongoDB
embed: true
---

This project was created for the Real Time Web course during the Web Design and Development minor. GeoBattle is an online multiplayer game where you have to guess a city or location based on a satellite image. The players that are the fastest with guessing the correct city will gain the most points and eventually win the game! The project uses websockets to give live feedback to the users and is built with React to handle state efficiently.  
&nbsp;  
For this project I use the React framework with TypeScript and SCSS for the client side and Nodejs with regular JavaScript for the server side. Since we are working with real time data, a framework that handles state changes well (like React) is great to use since it is built for this kind of usage. If I would have to write all the code with vanilla JavaScript, it would take much more time and decrease my productivity and possibilities.  
I use TypeScript since I share a lot of different kind of data between all my components, with TypeScript I can write strict code where functions and components only accept the types that I want them to receive. This improves my productivity and makes debugging and preventing bugs before they actually happen a lot easier. I have only worked with TypeScript before in a single project, so it still takes some time to get used to. But I already noticed the benefits of it.  
&nbsp;  
I have used the [positionstack API](https://positionstack.com/) for this project. This API can do forward and reverse geocoding. This allows you to get coordinates of a location (and other information) when you do a request (forward geocoding) and get the name of a location when you already have the coordinates (reverse geocoding). This is great for my project since I have to check if people guess the correct location.
