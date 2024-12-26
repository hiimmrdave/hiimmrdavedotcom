---
title: building with webc
description: On the process of removing reliance on templating languages
tags:
  - webc
  - blog meta
  - rough draft
  - learning in commit history
date: 2023-03-15
numberOfLatestPostsToShow: 4
---

## Behold

A man!

<small>that's a joke about Diogenes</small>

This one post is using the webc-based layout chain. The goal is to create feature parity with the other pages on the site, then gradually pull out the nunjucks.

<postlist
 :postlist="head(collections.posts, -1 * numberOfLatestPostsToShow)"
 :poststoshow="numberOfLatestPostsToShow"
 :postcount="collections.posts.length"
>text</postlist>

## TODO

- make that list be in correct order
- post list feature wants:
  - number of posts (default 3?)
  - show correct dates on post list
  - filter by tag (default to posts?)
  - posts before and after a certain post (default to page if in the sequence?)
- post date/time feature:
  - take prop of ISO date string (generalize for current page or list of posts)
- header navigation
- blog post next/previous links
  - sort of, I dropped them in a webc wrapper
- how am I intended to access/call global filters from webC?
  - works fine from webc:type="js", not as I expected within webc:setup
  - my problem or upstream bug with this.page.lang and getLocaleCollectionItem? probably me.
- date formats
- how tags work
- optionally pull some localization and other options from metadata
- package up changes

I'm cracking away at this on the side. I'm motivated by the challenge and also I have other responsibilities.
