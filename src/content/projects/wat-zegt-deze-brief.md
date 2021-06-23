---
order: 2
title: Wat Zegt Deze Brief
description: A web application for low-literate NT2 people in The Netherlands that have a hard time understanding formal letters. Built with Svelte(Kit), TypeScript and Supabase (an open-source Firebase alternative).
timestamp: 1624010400
live: https://wzdb.victorboucher.dev/
tech: Svelte, Sass, TypeScript, Supabase
embed: true
---

We created this application in a team of three people for the 'Meesterproef' assignment during the Web Design and Development minor. Our client for this project was Tessa de Goede, alumnus of Communication and Multimedia Design.  
&nbsp;  
Low-literate NT2 people in The Netherlands have a hard time dealing with formal letters they don't understand. It's very difficult for them to assess if the letters require immediate action. They usually have to ask help from community centers, neighbors or family, which may take more time than necessary. Another factor is that more than enough people inside this demographic are ashamed of being low-literate, which makes opening up about it and asking for help difficult.  
&nbsp;  
We decided to use [SvelteKit](https://kit.svelte.dev/) as our front-end framework. It is very simple to use, as the syntax is similar to plain HTML. The creator of SvelteKit, [Rich Harris](https://github.com/Rich-Harris), has a big preference for building progressively enhanced apps, which is very important to us as well. During this minor we have learned that it is very important to include as many people in your target audience as possible, which progressive enhancement helps with. Considering we don't know where people using WZDB come from, and how technologically advanced they are, this is something we had to keep in the back of our mind constantly.  
&nbsp;  
SvelteKit also has support for back-end functions, which makes creating a separate back-end app unnecessary. This keeps us focussed on building out nice features, without being concerned about authentication throughout both the front-end and back-end.  
&nbsp;  
These back-end functions, as well as part of the front-end, interact with our database solution which is [Supabase](https://supabase.io/). Supabase is a database, authentication and cloud file storage solution in one. It has a JavaScript client which packs all these features in a simple-to-use package for us to use in our application.  
&nbsp;  
