const { strictEqual, noop } = require('../utils');
const reduceRight = require('../lib/reduceRight');
const toArray = Array.from;

describe('reduceRight', function() {
  var list = reduceRight(['foo', 'bar', 'baz'], function(memo, str){ return memo + str; }, '');
  strictEqual(list, 'bazbarfoo', 'can perform right folds');

  list = reduceRight(['foo', 'bar', 'baz'], function(memo, str){ return memo + str; });
  strictEqual(list, 'bazbarfoo', 'default initial value');

  var sum = reduceRight({a: 1, b: 2, c: 3}, function(memo, num){ return memo + num; });
  strictEqual(sum, 6, 'default initial value on object');

  strictEqual(reduceRight(null, noop, 138), 138, 'handles a null (with initial value) properly');
  strictEqual(reduceRight([_], noop), _, 'collection of length one with no initial value returns the first item');

  strictEqual(reduceRight([], noop, void 0), void 0, 'undefined can be passed as a special case');
  strictEqual(reduceRight([], noop), void 0, 'returns undefined when collection is empty and no initial value');

  // Assert that the correct arguments are being passed.

  var args,
      init = {},
      object = {a: 1, b: 2},
      lastKey = keys(object).pop();

  var expected = lastKey === 'a'
    ? [init, 1, 'a', object]
    : [init, 2, 'b', object];

  reduceRight(object, function() {
    if (!args) args = toArray(arguments);
  }, init);

  deepEqual(args, expected);

  // And again, with numeric keys.

  object = {2: 'a', 1: 'b'};
  lastKey = keys(object).pop();
  args = null;

  expected = lastKey === '2'
    ? [init, 'a', '2', object]
    : [init, 'b', '1', object];

  reduceRight(object, function() {
    if (!args) args = toArray(arguments);
  }, init);

  deepEqual(args, expected);
});
