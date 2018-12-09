---
layout: post
title:  "Layer 4 and Layer 7 load-balancing"
date:   2018-04-29 22:08:10 +0530
---
### Problem
What kind of load-balancers are there which I could use for distributing load across different servers.

### Solution
There are two type of load balancers - layer 4 and layer 7 load balancers

### Explanation
Layer 7 is the application layer in the http stack. Application layer is responsible for encoding and decoding the packet payload which contains the information needed by either the client or the server to perform a function. Layer 7 load balancer functions by routing requests to different servers according to the type of content requested by the user. Static resources like images, video files might be routed to a different server and transactional data to another. Since it needs to read the payload to make a decision, it is slightly slower than layer 4 load balancer.
Layer 4 is the Transport layer, so the layer 4 load balancer makes decision based on source and destination IP addresses. It was generally implemented in specialized hardware. It is faster than Layer 7 load balancer, however it is overall more efficient to use layer 4 load balancer. You don’t need to replicate static resources on all the load balanced servers. Also cheaper and faster commodity hardwares, have eliminated the need for specialized hardware requirements. Software based layer 7 load balancers are generally good enough for majority of use cases.

### Resources
[https://www.nginx.com/resources/glossary/layer-7-load-balancing/
](https://www.nginx.com/resources/glossary/layer-7-load-balancing/)
[https://www.nginx.com/resources/glossary/layer-4-load-balancing/](https://www.nginx.com/resources/glossary/layer-4-load-balancing/)