---
layout: post
title:  "Reverse proxy"
date:   2018-04-30 22:08:10 +0530
---

### Topic
What is reverse-proxy and how it is different from load balancer?

### Explanation
Reverse proxy acts as a proxy for different servers. Normally, the proxy which we as consumers use is called forward proxy which acts as a proxy for different clients. Forward proxy route the client requests through itself to a fixed end-point (server), whereas in reverse-proxy, the requests to the server flow through it which it then redirects it to different servers sitting behind it. Forward proxy is generally used to bypass firewall (which blocks IPs of sites but not of forward proxy servers) and can also act as a cache server. Reverse proxy is used for numerous purposes like load-balancing (to distribute requests equally to all the servers), add authentication, security, encryption, compression etc.  Hence it is also beneficial to use it even when there is only one server behind it, which makes it different from load balancer whose primary purpose is to balance load across different servers.

<img src="../images/proxy.jpg" width="400"/>

### References
[https://www.nginx.com/resources/glossary/reverse-proxy-server/](https://www.nginx.com/resources/glossary/reverse-proxy-server/)
[https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/](https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/)
