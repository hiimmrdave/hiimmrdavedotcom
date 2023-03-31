---
title: building with webc
description: I don't know if this gets used
layout: post.webc
tags:
  - webc
  - blog meta
  - rough draft
  - learning in commit history
---

## Behold

A man!

<small>that's a joke about Diogenes</small>

This one post is using the webc-based layout chain. The goal is to create feature parity with the other pages on the site, then gradually pull out the nunjucks.

<postlist></postlist>

## TODO

- <del>make that list be in correct order</del>
- post list feature wants:
  - number of posts (default 3?)
  - filter by tag (default to posts?)
  - posts before and after a certain post (default to page if in the sequence?)
- <del>header navigation</del>
- <del>blog post next/previous links</del>
  - <del>sort of, I dropped them in a webc wrapper</del>
- <del>how am I intended to access/call global filters from webC?</del>
  - works fine from webc:type="js", not as I expected within webc:setup
  - my problem or upstream bug with this.page.lang and getLocaleCollectionItem? probably me.
- do some collections merit their own next/back separate from posts chronology?
- <del>date formats<del>
- <del>how tags work</del>
- optionally pull some localization and other options from metadata
- package up changes

I'm cracking away at this on the side. I'm motivated by the challenge and also I have other responsibilities.
