---
title: Fetch Subgraph
draft: true
mermaid: true
---

```mermaid
flowchart LR
  Start--request-->load
  load[Loading...]
  load--fail--> fail(("Failure :("))
  load--succeed-->success(("yay!"))
  fail--retry-->Start
```
