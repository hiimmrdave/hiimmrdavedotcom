---
title: Fetch Subgraph
draft: true
---

```mermaid
flowchart LR
  Start-->req
  req[Request]-->load
  load[Loading...]
  load--fail--> fail(("Failure :("))
  load--succeed-->success(("yay!"))
  fail--retry-->Start
```
