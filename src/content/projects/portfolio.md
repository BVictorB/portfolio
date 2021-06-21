---
order: 6
title: Portfolio
description: My personal portfolio website (this website), with some of my (school) projects on it. Everything is automatically rendered from Markdown files (each project and photo category has its own Markdown file with data in it that gets rendered).
timestamp: 1615806000
live: https://victorboucher.dev/
tech: Html, Css, React, Next
---

After watching a video on YouTube created by Ben Awad (a YouTuber that makes videos about programming), where he creates a kind of blog using React with Next using Markdown files, I wanted to create my portfolio site the same way. I really liked the idea of just having to create a new Markdown file when I want to add a new project, it felt almost like creating your own CMS where it is easy as pie to add new content. Every project and photography album is a single Markdown file which gets automatically rendered using the code in the pages/projects and pages/photography folders.  
&nbsp;  
I am really satisfied with the structure and quality of this project, every part of the website is in my opinion perfectly structured, code wise and folder structure wise. I have used the gray-matter dependency to add metadata at the top of my Markdown files, and the react-markdown dependency to parse the Markdown. One thing that I really enjoy doing to improve my development experience and code quality, is setting paths in the jsconfig file. This way I can just import from '@components' for example from everywhere in the project, instead of doing '../../../components' for example. In the components folder I just have an index.js file where I export all the components that are available in this folder. I really like this workflow, it is basically the same setup that we have in the musician-finder project.  
&nbsp;  
I've never worked with Next before, but I wanted to get into it for a while now. During the development of this project, I have really discovered the power of Next, I will definitely be using it for a lot more of my projects in the future.
