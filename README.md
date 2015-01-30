# within-periodic-hole.js
[![Travis build status](http://img.shields.io/travis/jmeas/within-periodic-hole.js.svg?style=flat)](https://travis-ci.org/jmeas/within-periodic-hole.js)
[![Code Climate](https://codeclimate.com/github/jmeas/within-periodic-hole.js/badges/gpa.svg)](https://codeclimate.com/github/jmeas/within-periodic-hole.js)
[![Test Coverage](https://codeclimate.com/github/jmeas/within-periodic-hole.js/badges/coverage.svg)](https://codeclimate.com/github/jmeas/within-periodic-hole.js)
[![Dependency Status](https://david-dm.org/jmeas/within-periodic-hole.js.svg)](https://david-dm.org/jmeas/within-periodic-hole.js) 
[![devDependency Status](https://david-dm.org/jmeas/within-periodic-hole.js/dev-status.svg)](https://david-dm.org/jmeas/within-periodic-hole.js#info=devDependencies)

Determine if a point is inside of a periodic hole.

### Terminology

A hole is a piece of a function that does not exist. Consider the following function:

`0 1 2 _ _ _ 6 7 8 _ _ _ 12 13 14`

This is a function with a hole of length 3 and period 3.

A periodic hole is defined by three properties:

- `length` - The length of the hole
- `period` - How often the hole repeats itself
- `startValue` - A value that marks the (inclusive) start of a hole

To define the hole in the above example, the following definition would be used:

```js
{
  length: 3,
  period: 3,
  startValue: 3
}
```

### API

##### `withinPeriodicHole(point, holeDefinition)`

Returns a Boolean indicating whether the point is in the periodic hole defined by `holeDefinition`.
