const reduce = require('../lib/reduce');
const { noop, strictEqual } = require('../utils');

describe('reduce', function () {
  let sum = reduce([1, 2, 3], function (memo, num) { return memo + num; }, 0);
  strictEqual(sum, 6, 'can sum up an array');

  const context = { multiplier: 3 };
  // eslint-disable-next-line max-len
  sum = reduce([1, 2, 3], function (memo, num) { return memo + num * this.multiplier; }, 0, context);
  strictEqual(sum, 18, 'can reduce with a context object');

  //sum = reduce([1, 2, 3]).reduce(function (memo, num) { return memo + num; }, 0);
  //strictEqual(sum, 6, 'OO-style reduce');

  sum = reduce([1, 2, 3], function (memo, num) { return memo + num; });
  strictEqual(sum, 6, 'default initial value');

  const prod = reduce([1, 2, 3, 4], (memo, num) => { return memo * num; });
  strictEqual(prod, 24, 'can reduce via multiplication');

  strictEqual(reduce(null, noop, 138), 138, 'handles a null (with initial value) properly');
 // strictEqual(reduce([], noop, void 0), void 0, 'undefined can be passed as a special case');
 // strictEqual(reduce([_], noop), _, 'collection of length one with no initial value returns the first item');
 // strictEqual(reduce([], noop), void 0, 'returns undefined when collection is empty and no initial value');
});
