---
layout: post
title:  "Tracking pixel"
date:   2018-04-24 22:08:10 +0530
---
### Problem
I send mails frequently, however I want to track how many people actually open them and which kind of mails perform better..

### Solution
Use tracking pixel in an image

### Explanation
Tracking pixel is an image which is embedded inside an email. When the user opens an email, a request is made to download the image from the server. The request also includes other data to identify user action like cookie Id. The code on the browser then attributes the click to that particular user.

### How to get started
You need to add a font file to your app to use the font-icons. You can head to [fontastic.me](http://fontastic.me/) or [fontawesome](https://fontawesome.com/) to download a font-file. Add it to your app as a resource and then use it as a font family for a text field in your app. Play around with it by changing the character, size and its color. Now instead of 100s of images, you would have a single file with its size in KBs.

### References
[https://www.quora.com/How-does-a-tracking-pixel-work](https://www.quora.com/How-does-a-tracking-pixel-work)
