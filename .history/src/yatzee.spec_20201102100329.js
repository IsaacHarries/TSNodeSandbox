const test = require('ava');

const yahtzee_upper = (dice) => {
  const slots = {};
  return Math.max(...dice.map(die => slots[die] = slots[die - 1] || 0 + die));
}

test('2 5s', t => {
  t.is(yahtzee_upper([2, 3, 5, 5, 6]), 10);
});

test('4 1s', t => {
  t.is(yahtzee_upper([1, 1, 1, 1, 3]), 4);
});

test('3 1s', t => {
  t.is(yahtzee_upper([1, 1, 1, 3, 3]), 6);
});

test('1 5', t => {
  t.is(yahtzee_upper([1, 2, 3, 4, 5]), 5);
});

test('5 6s', t => {
  t.is(yahtzee_upper([6, 6, 6, 6, 6]), 30);
});

test('2 50995s', t => {
  t.is(yahtzee_upper([1654, 1654, 50995, 30864, 1654, 50995, 22747,
    1654, 1654, 1654, 1654, 1654, 30864, 4868, 1654, 4868, 1654,
    30864, 4868, 30864]), 123456);
});


