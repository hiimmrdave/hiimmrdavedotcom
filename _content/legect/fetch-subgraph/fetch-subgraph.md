---
title: Fetch Subgraph
mermaid: true
draft: true
---

```mermaid
flowchart LR
  Start--request-->load
  load[Loading...]
  load--fail--> fail(("Failure :("))
  load--succeed-->success(("yay!"))
  fail--retry-->Start
```
