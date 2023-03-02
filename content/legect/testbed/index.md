---
title: legect
draft: true
mermaid: true
---

I'm mostly curious how the whole footnotes^[This is the part that gets added below] thing goes.

If I write additional[^extra] notes in a separate paragraph then I can [^1] reference them below. What happens if I don't respect the auto-numbering?

If I go on to add add'l footnotes, what happens then?[^1]

Areas of interest:

- Check out the starting flow chart for [dose-calc](../dose-calc){.project .mine} {.link-list-item}
- New ideas go to [inbox](../inbox) {.link-list-item}

+++ I wonder how much text I can put on this line before it becomes problematic
This is the part where I put the information that isn't revealed immediately
+++

this
: works
: mostly

## TODO

Fix CSS for definition lists

```mermaid
flowchart LR
A --> B
```

*[add'l]: additional

[^extra]: this footnote is a bit extra
[^1]: This is the first footnote I numbered.
