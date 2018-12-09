---
layout: post
title:  "Microservices and SOA"
date:   2018-04-28 22:08:10 +0530
---
### Problem
What are the solutions we have to 

### Explanation
The main differences between Micro services and SOA lies in the way different services are designed. In MSA (micro-services architecture), focus is on designing each service to add some business value, whereas in SOA, the focus is on designing services according to different logical layers (like application layer, business layer, db layer etc). The problem with the approach which is followed by SOA is that failing of any service, results in other services not being able to do their job resulting in no business value being added. A single service on which multiple services depend on could stop the entire site’s operation. In case of MSA, each service handles one business function. A bug in one service would stop providing business value associated with that service only whereas rest of the business works as usual. This may lead to redundancy of code because of all the logical layers being included in a single service itself.

<img src="https://getdailyprogramming.github.io/images/soa_microservices.jpg" width="400"/>

### References
[http://blog.xebia.com/microservices-versus-the-common-soa-implementation/](http://blog.xebia.com/microservices-versus-the-common-soa-implementation/)

