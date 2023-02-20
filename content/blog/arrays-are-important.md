---
title: Arrays are important!
description: The array is a humble and under appreciated data structure.
date: 2020-11-28
tags:
  - data structure
  - array
  - javascript
layout: layouts/post.njk
---

## The first non-primitive data type

Every language has primitive data types. Primitives are pieces of information that can't be broken into smaller parts and still retain their meaning. In javascript, these are `number`, `string`, `boolean`, `bigint`, `symbol`, `null`, and `undefined`. Other languages have more or fewer. Java and C, for example, differentiate between integers and floating point numbers and deal in individual characters instead of strings. Every language, though, eventually has to deal with more than one piece of information, and the simplest collection of data is the array.

An array is a group of data in sequence. It holds each piece of data (each "element") in order and can hold zero or more elements. The elements of an array can be any type of data, including any of the primitive types, arrays, or objects (which are tricky beasts and will be covered at a later date.) We can read any element by its position in the order (its "index"), we can add, alter, or remove elements at any point. We can even change the order of the elements, if we're careful.

## Let's look at a few examples of arrays

Arrays are usually denoted by enclosing a comma-separated list of values in square brackets.

The simplest array is the empty array.

```javascript
let arr = [];
```

Yes, an array can consist of no elements! It's not a terribly useful array, but it still counts. But let's look at two more examples:

```javascript
let a = [0, 2, 5, 1, 15, 3];
let b = [0, 1, 2, 3, 5, 15];
```

Each of these arrays consists of six numbers, the same six numbers in this case. But an array can hold more than numbers.

```javascript
let names = ["Pete", "Tom", "Jane", "Dwane", "Melanie"];
```

<aside><p>The javascript engine does a lot of work to manage different types of data together this way for us. One of the things that makes some other languages "lower level" is that the programmer has to consider the differences between types and how to manage different types of data together, and they gain greater control over how they act on that data.<p></aside>

In javascript, the arrays don't even all have to be of the same type!

```javascript
let jumble = [
  "rutabaga", 12, false, , null, "12", 12, ["a", 12], undefined, [true],
];
```

This type of array might not be terribly useful, but it demonstrates a few interesting traits:

- arrays can have any type as elements, even other arrays
- an array can contain identical pieces of data in multiple positions
- an array can contain empty positions

An array can be searched, sorted, listed, and acted on element-by-element. Javascript has a whole variety of methods on the [Array prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to help with this. In a future post, I'll start breaking down what these are and what they're good for
