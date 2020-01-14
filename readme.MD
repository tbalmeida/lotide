# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters( array )`: will take in an array and return the middle-most element(s) of the given array.
The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
  - For arrays with one or two elements, there is no middle. Return an empty array.
  - For arrays with odd number of elements, an array containing a single middle element should be returned.
  - For arrays with an even number of elements, an array containing the two elements in the middle should be returned
* `findKey(...)`: 
* `findKeyByValue(...)`: 
* `flatten(...)`: 
* `head(...)`: 
* `letterPositions(...)`: 
* `map(...)`: 
* `middle(...)`: 
* `tail(...)`: 
* `takeUntil(...)`: 
* `without(...)`: 