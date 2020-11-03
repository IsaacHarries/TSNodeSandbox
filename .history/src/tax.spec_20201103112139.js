const test = require('ava');

const tax = (income) => {
  const brackets = (val) => ({
    10000: 0.0,
    30000: 0.10,
    100000: 0.25,
    [val]: 0.40,
  });

  console.log('income', income);

  return Object.entries(brackets(income)).reduce(([income, tax], [bracket, percentage], i, { [i - 1]: prev_entry }) => {
    const prev_bracket = prev_entry[0] || 0;

    console.log('prev_bracket', prev_bracket);
    console.log('bracket', bracket);
    if (income < bracket) return [bracket - income, tax + (bracket - prev_bracket) * percentage];
    else return acc;
  }, [income, 0]);
  // return Math.max(...dice.map(die => slots[die] = (slots[die] || 0) + die));
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

// test('12000', t => {
//   t.is(tax(12000), 200);
// });

// test('56789', t => {
//   t.is(tax(56789), 8697);
// });

// test('1234567', t => {
//   t.is(tax(1234567), 473326);
// });


