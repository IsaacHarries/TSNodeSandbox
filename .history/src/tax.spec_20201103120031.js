const test = require('ava');

const tax = (income) => {
  const brackets = (val) => [
    [10000, 0.0],
    [20000, 0.10],
    [70000, 0.25],
    [val, 0.40],
  ];

  const [tax] = brackets(income).reduce(([tax, income], [bracket, percentage]) => {
    return (income > bracket) ? [tax + bracket * percentage, income - brackets] : [tax + income * percentage, 0]
  }, [0, income]);

  return Math.floor(tax);
}

test('0', t => {
  t.is(tax(0), 0);
});

// test('10000', t => {
//   t.is(tax(10000), 0);
// });

// test('10009', t => {
//   t.is(tax(10009), 0);
// });

// test('10010', t => {
//   t.is(tax(10010), 1);
// });

// test('12000', t => {
//   t.is(tax(12000), 200);
// });

// test('56789', t => {
//   t.is(tax(56789), 8697);
// });

// test('1234567', t => {
//   t.is(tax(1234567), 473326);
// });


