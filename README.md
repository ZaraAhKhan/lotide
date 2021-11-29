# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @zaraahkhan/lotide`

**Require it:**

`const _ = require('@zaraahkhan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1,array2)`: checks if two arrays are equal and displays the result
* `assertEqual(actual,expected)`: checks if the actual/a given string is equal to the expected string
* `assertObjectsEqual(object1,object2)`: checks if two objects are equal and displays the result
* `countLetters(string)`: returns the number of times a character appears in a given string
* `countOnly(allItems,itemsToCount)`: counts the number of times a given element appears in a given array
* `eqArrays(array1,array2)`: returns if two arrays are equal 
* `eqObjects(object1,object2)`: returns if two objects are equal 
* `findKey(object,callBackfn)`: returns the value of a key in a given object
* `findKeyByValue(object,value)`: returns the key of a given value in a given object
* `flatten(array)`: flattens an array; when given an array of arrays converts it into a single array
* `head(array)`: returns the first element of the array
* `letterPositions(string)`: returns an array of the indices/index of a character
                              in a string
* `map(array,callBackFunction)`: returns an array after implementing an operation(mentioned in the call back 
                                  function) on every element of the array
* `middle(array)`: returns the middle element(s) of the array
* `tail(array)`: returns all  element(s) of the array except the first element
* `takeUntil(array, callBackFunction)`: returns the  element(s) of the array until it satisfies the call back function
* `without(sourceArray, itemsToRemoveArray)`: returns an array after removing elements that are in the itemsToRemoveArray



