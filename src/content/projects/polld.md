---
order: 2
title: Poll'd
description: A web application where you can create polls, and let other people vote on these polls. With websockets to give live updates, push notifications to let users know when a poll closes (and which answer won) and more.
timestamp: 1615201200
live: https://victor-browser-technologies.herokuapp.com/
tech: Html, Css, JavaScript, NodeJS, MongoDB
embed: true
---

This web application was created for the Browser Technologies course during the Web Design and Development minor. During this course we had to focus on 'Progressive Enhancement'. The whole application still had to function without any special browser API's, JavaScript, cookies and local storage. All these extra features are nice to have, but not necessary for the core functionality of the app. I managed to do that quite well, everything works perfectly fine without any client-side JavaScript and cookies. You will miss out on some features, but you can still just create, publish, save and vote on polls.  
&nbsp;  
With everything working perfectly fine in your browser (cookies, JavaScript, websockets and push notifications) you get some extra features. Like finding back your voted polls on the 'My votes' pages, aswell as finding back your poll drafts on the 'Saved polls' page. You also get live updates on poll pages with websockets, so if another user votes on a poll that you have opened in your browser, you won't have to refresh to see the updated data. You can also subscribe to notifications of a poll, this shows you a push notification when a poll closes, that lets you know which answer won (with how many votes and how much percentage).  
&nbsp;  
Every published poll, drafted poll and notification subscription gets saved in a database. The server checks every minute if any poll needs to get closed (depending on closing time). If a poll closes everyone that has subscribed gets a push notification, and voting is no longer possible.
