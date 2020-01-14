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

* `countLetters( string )`: this function takes in a sentence and then returns an object a count of each of the letters in that sentence. 
* `countOnly( allItems, itemsToCount  )`: This function takes in a collection of items and return counts for a specific subset of those items. It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others. The items must be strings.
* `findKey( object, callbackFunction )`: this function takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined. 
* `findKeyByValue( object, searchValue )`: it takes in an object and a value and returns the first key which contains the given value. If no key with that given value is found, then the return is undefined.
* `flatten( array )`: Given an array with other arrays inside, it can flatten it into a single-level array.
* `head( array )`: this function retrieves the value of first element from the array. This is often referred to as the "head" of the array.
* `letterPositions( sentence )`: this function returns all the indices (zero-based positions) in the string where each character is found. The return is an object with an rray for each letter, with the positions of the letter in the sentence.
* `map( array, callbackFunction )`: it  takes in two arguments:
  -  An array to map;
  -  A callback function.
The return is a new array based on the results of the callback function.
* `middle( array )`: 
    take in an array and return the middle-most element(s) of the given array.
    The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
    - For arrays with one or two elements, there is no middle. Return an empty array.
    - For arrays with odd number of elements, an array containing a single middle element should be returned.
    - For arrays with an even number of elements, an array containing the two elements in the middle should be returned
* `tail( array )`: The tail is all elements of an array except its head (first element).
* `takeUntil( array, callbackFunction )`: it takes in two parameters as well:
  -  The array to work with;
  -  The callback (which Lodash calls "predicate").
The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value. The callback should only be provided one value: The item in the array. 
* `without( array, itemsToRemove )`: This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.