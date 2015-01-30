global.fixtures = global.fixtures || {};
global.fixtures.solutions = global.fixtures.solutions || {};
var s = global.fixtures.solutions;
s.balanced = {};

// The key of the array is the location of the point
// The value of the array is whether we're within the
// hole or not

// startValue = 0
// _ _ _ 3 4 5 _ _ _ 9 10 11 _ _ _
s.balanced.zero = [
  1, 1, 1,
  0, 0, 0,
  1, 1, 1,
  0, 0, 0
];

// startValue = 1
// 0 _ _ _ 4 5 6 _ _ _ 10 11 12 _ _
s.balanced.one = [
  0, 1, 1,
  1, 0, 0,
  0, 1, 1,
  1, 0, 0,
  0, 1, 1
];

// startValue = 2
// 0 1 _ _ _ 5 6 7 _ _ _ 11 12 13 _
s.balanced.two = [
  0, 0, 1,
  1, 1, 0,
  0, 0, 1,
  1, 1, 0,
  0, 0, 1
];

// startValue = 3
// 0 1 2 _ _ _ 6 7 8 _ _ _ 12 13 14
s.balanced.three = [
  0, 0, 0,
  1, 1, 1,
  0, 0, 0,
  1, 1, 1,
  0, 0, 0
];


// startValue = 4
// _ 1 2 3 _ _ _ 7 8 9 _ _ _ 13 14
s.balanced.four = [
  1, 0, 0,
  0, 1, 1,
  1, 0, 0,
  0, 1, 1,
  1, 0, 0
];

// startValue = 5
// _ _ 2 3 4 _ _ _ 8 9 10 _ _ _ 14
s.balanced.five = [
  1, 1, 0,
  0, 0, 1,
  1, 1, 0,
  0, 0, 1,
  1, 1, 0
];

// startValue = 6
// _ _ _ 3 4 5 _ _ _ 9 10 11 _ _ _
s.balanced.six = [
  1, 1, 1,
  0, 0, 0,
  1, 1, 1,
  0, 0, 0,
  1, 1, 1
];
