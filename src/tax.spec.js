// [2019-07-15] Challenge #379 [Easy] Progressive taxation
// Challenge
// The nation of Examplania has the following income tax brackets:

// income cap      marginal tax rate
//   ¤10,000           0.00 (0%)
//   ¤30,000           0.10 (10%)
//  ¤100,000           0.25 (25%)
//     --              0.40 (40%)
// If you're not familiar with how tax brackets work, see the section below for an explanation.

// Given a whole-number income amount up to ¤100,000,000, find the amount of tax owed in Examplania. Round down to a whole number of ¤.

const test = require('ava');

const tax = (income) => {
  const brackets = (val) => [
    [10000, 0.0],
    [20000, 0.10],
    [70000, 0.25],
    [val, 0.40],
  ];

  return Math.floor(brackets(income).reduce(([tax, income], [bracket, percentage]) => (income > bracket) ? [tax + bracket * percentage, income - bracket] : [tax + income * percentage, 0], [0, income])[0]);
}

test('0', t => {
  t.is(tax(0), 0);
});

test('10000', t => {
  t.is(tax(10000), 0);
});

test('10009', t => {
  t.is(tax(10009), 0);
});

test('10010', t => {
  t.is(tax(10010), 1);
});

test('12000', t => {
  t.is(tax(12000), 200);
});

test('56789', t => {
  t.is(tax(56789), 8697);
});

test('1234567', t => {
  t.is(tax(1234567), 473326);
});


