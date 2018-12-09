---
layout: post
title:  "Multiple Validations"
date:   2018-11-20 22:08:10 +0530
---
### Problem
Put multiple validations on the data without putting multiple if-else statements as it makes the code messy.

### Solution
Define an interface. Implement the interface for multiple validations. Keep the instances of the above validations in an array and loop through it on the target data. On reflecting back, it might be a good idea for implementation of interface to be a singleton, since the validation classes do not hold any state.

### References
https://dzone.com/articles/avoiding-many-if-blocks
