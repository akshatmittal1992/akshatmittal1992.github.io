---
layout: post
title:  "Font icons"
date:   2018-04-23 22:08:10 +0530
---
### Problem
The images which I use in my app for navigation icons and buttons is increasing the size of my app. It decreases the chances my app being downloaded on low memory devices and requires longer install times.

### Solution
Use font-icons instead of images in your app.

### Explanation
Many icons which you see in the apps are actually font-icons and not images. Font icons are nothing but characters , except they are in custom designed font-family unlike the font-family which we are used to seeing (like Ariel, Times New Roman etc).  

<img src="https://getdailyprogramming.github.io/images/2018-04-23-screenshot1.png" width="200"/><img src="https://getdailyprogramming.github.io/images/2018-04-23-screenshot2.png" width="200" />

The icons which you see in the above screenshots from Google Maps are all font icons. By the way, font-icons can be used on web also.

### How to get started
You need to add a font file to your app to use the font-icons. You can head to [fontastic.me](http://fontastic.me/) or [fontawesome](https://fontawesome.com/) to download a font-file. Add it to your app as a resource and then use it as a font family for a text field in your app. Play around with it by changing the character, size and its color. Now instead of 100s of images, you would have a single file with its size in KBs.

[screenshot1]: ../images/2018-04-23-screenshot1.png
[screenshot2]: ../images/2018-04-23-screenshot2.png
