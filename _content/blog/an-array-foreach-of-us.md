---
title: An Array forEach of us
description: I have a preferred way to move through arrays.
date: 2020-12-05
tags:
  - data structure
  - array
  - javascript
---

The most basic use of an array is to do the same thing with each element of the array. Javascript provides several ways to do this, and which one you use is largely a matter of preference. Each of the examples below assumes the same array

```javascript
var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
```

and produce the same output

```text
red
orange
yellow
green
blue
purple
```

## `for`, `while`, and `do...while`

The [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop is a basic language feature of many languages. Any task that is repeated a fixed number of times is well suited to a `for` loop.

```javascript
for (
  let i = 0; // starting from index 0
  i < colors.length; // while the index is less than the length of the array
  i++ // go through the indices one by one and do the following
) {
  console.log(colors[i]); // log the element at index `i` to the console
}
```

The [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) loop is identical to `for`, except that the initialization is declared before the loop and the iteration expression is at the end of each block. It's uncommon to see a `while` loop when dealing with an array since they're typically used for indeterminant numbers of repetitions, and we can always know how long our array is.

```javascript
let i = 0; // starting from index 0
while (
  i < colors.length // while the index is less than the length of the array
) {
  console.log(colors[i]); // log the element at index `i` to the console
  i++; // go to the next index
}
```

There is also a `do...while` syntax which works largely the same as `while`, but it will fail on an empty array. I mention it only for the sake of the "well actually" crowd. I do not recommend it for arrays and it is perfectly reasonable to never write a `do...while` loop.

## `for...of` and `for...in`

The [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop is built for arrays. It assumes that you want to iterate through each element of the array and lets you provide a variable name to refer to the element at hand.

```javascript
for (const color of colors) {
  // "color" refers to each element of the array.
  console.log(color);
}
```

Saved a whole bunch of typing, here. It strikes a nice balance of being concise and readable. You may notice that `color` is declared as a `const`. This is fine since it goes "out of scope" in each iteration of the loop and is re-declared. Within the body of the loop (the part between the `{`curly bois`}`), it refers to the current array element and doesn't change. This is my preferred practice, but you can read as many essays as you please on the relative merits of `let`, `var`, and `const` and make your own decisions there.

The [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) syntax is similar to `for...of` but instead of iterating over the values of the elements, it iterates over the indices of the elements. To get the same result as the rest of the loops it's a bit more typing than a `for...of` loop.

```javascript
for (const index in colors) { // "index" is similar to the "i" of a for loop
  console.log(colors[index]); // you have to refer to the original array
}
```

To be fair, `for...in` loops are designed for iterating through the property names of objects, and they are very useful in that case. They weren't designed for arrays, and it shows through the extra steps needed to use them this way.

## `Array.forEach()`

If we're playing "one of these things is not like the other," we've reached the one that doesn't belong. That's because `forEach` isn't a basic language feature like `for` or `while`. Instead, it's a "method", a function that belongs to a certain class of objects. It is available in most javascript environments, exactly like the others, but if it isn't we could write our own version to implement it in older browsers that don't support it!

Let's start with a simple example:

```javascript
colors.forEach((color) => {
  console.log(color);
});
```

This looks similar to the `for...of` pattern, but what's happening is slightly different. `forEach` accepts an argument called a "callback", which is a function that will be called for each element of the array. The same functionality could be written with a more traditional function definition.

```javascript
function logElement(element) {
  console.log(element);
}

colors.forEach(logElement);
```

In this case, the `logMe` function will be called for each element of the array, with the element as the only argument to the function. We can also define the callback function with up to three arguments.

```javascript
function logArrayItem(_item, index, array) {
  console.log(array[index]);
}

colors.forEach(logArrayItem);
```

This simple example doesn't need to have access to have access to the whole array in each iteration, but in more complex cases it becomes essential.

I prefer the `forEach` way of thinking. In simple cases, the callback can be provided in-line, while in more complex cases it can be separated out. It makes it simple to refer to the array as a whole, its indices, and the values of the individual elements. The only drawback is that it may not be available in older browsers, and for that we have [polyfill.io](https://polyfill.io).
