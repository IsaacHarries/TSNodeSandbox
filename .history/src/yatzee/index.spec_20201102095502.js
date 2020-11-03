const test = require('ava');

const yahtzee_upper = (dice) => {
  console.log('HERE');
  const slots = new Array(5).fill(0);
  for (const die of dice) slots[die - 1] += die;
  console.log(slots);
  // return Math.max(...dice.reduce((acc, val, i) => [...acc, acc[i] += val], new Array(5).fill(0)));
}

test('2 5s', t => {
  t.is(yahtzee_upper([2, 3, 5, 5, 6]), 10);
});

// test('4 1s', t => {
//   t.is(yahtzee_upper([1, 1, 1, 1, 3]), 4);
// });

// test('3 1s', t => {
//   t.is(yahtzee_upper([1, 1, 1, 3, 3]), 6);
// });

// test('1 5', t => {
//   t.is(yahtzee_upper([1, 2, 3, 4, 5]), 5);
// });

// test('5 6s', t => {
//   t.is(yahtzee_upper([6, 6, 6, 6, 6]), 30);
// });
