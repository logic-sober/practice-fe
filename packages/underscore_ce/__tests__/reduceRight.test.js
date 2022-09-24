const {
  strictEqual, noop, keys, toArray, deepEqual
} = require('../utils');
const reduceRight = require('../lib/reduceRight');

describe('reduceRight', () => {
  let list = reduceRight(['foo', 'bar', 'baz'], function (memo, str) { return memo + str; }, '');
  strictEqual(list, 'bazbarfoo', 'can perform right folds');

  list = reduceRight(['foo', 'bar', 'baz'], function (memo, str) { return memo + str; });
  strictEqual(list, 'bazbarfoo', 'default initial value');

  const sum = reduceRight({ a: 1, b: 2, c: 3 }, function (memo, num) { return memo + num; });
  strictEqual(sum, 6, 'default initial value on object');

  strictEqual(reduceRight(null, noop, 138), 138, 'handles a null (with initial value) properly');
  strictEqual(reduceRight([reduceRight], noop), reduceRight, 'collection of length one with no initial value returns the first item');

  strictEqual(reduceRight([], noop, void 0), void 0, 'undefined can be passed as a special case');
  strictEqual(reduceRight([], noop), void 0, 'returns undefined when collection is empty and no initial value');

  // Assert that the correct arguments are being passed.

  let args;
  const init = {};
  let object = { a: 1, b: 2 };
  let lastKey = keys(object).pop();

  let expected = lastKey === 'a'
    ? [init, 1, 'a', object]
    : [init, 2, 'b', object];

<<<<<<< HEAD
  reduceRight(object, function (...opts) {
    if (!args) args = toArray(...opts);
=======
  reduceRight(object, function () {
    // eslint-disable-next-line
    if (!args) args = toArray(arguments);
>>>>>>> a9e187a4743f0f7f735590e55b1a78f50e36ba9b
  }, init);

  deepEqual(args, expected);

  // And again, with numeric keys.

  object = { 2: 'a', 1: 'b' };
  lastKey = keys(object).pop();
  args = null;

  expected = lastKey === '2'
    ? [init, 'a', '2', object]
    : [init, 'b', '1', object];

<<<<<<< HEAD
  reduceRight(object, function (...opts) {
    if (!args) args = toArray(...opts);
=======
  reduceRight(object, function () {
    // eslint-disable-next-line
    if (!args) args = toArray(arguments);
>>>>>>> a9e187a4743f0f7f735590e55b1a78f50e36ba9b
  }, init);

  deepEqual(args, expected);
});
