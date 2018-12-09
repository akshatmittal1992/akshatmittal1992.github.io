---
layout: post
title:  "Git rebase"
date:   2018-04-25 22:08:10 +0530
---
### Problem
I am working on a development branch which I made from master branch. By the time I finished my work, master branch had already moved forward. Pulling the master branch in my own branch and then merging it with master distorts the git history by making it difficult to read the commits done for a feature.

### Solution
Use git rebase before creating a pull request.

### Explanation
Suppose this is how the current development graph look like.
You made a branch from master, wrote some code and by the time you complete the development, the master branch has proceeded forward. So, you will need to pull the master code into your branch to raise the CR. However, this would interlink your commits with the commits made in master branch according to timestamp. Hence, developers in your team wouldn’t be able to isolate your commits in the git history easily for following the changes made for a particular feature. Here in comes the use of rebase, which pulls in the commits of master branch and then applies any additional commits which you have made since the last commit from where the two branches diverged. The following diagram might give you some more context and when in doubt, google.

<img src="https://getdailyprogramming.github.io/images/2018-04-25-screenshot1.png" width="400"/>

### How to get started
Get in the habit of rebasing on your feature branch in which you are working before raising a pull request
