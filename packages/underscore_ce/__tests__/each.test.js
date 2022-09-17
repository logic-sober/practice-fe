const { deepEqual, strictEqual, ok } = require('../utils');
const each = require('../lib/each');
const include = function (array, value) {
  return array.indexOf(value) > -1;
}

describe('each', function() {
  each([1, 2, 3], function(num, i) {
    strictEqual(num, i + 1, 'each iterators provide value and iteration count');
  });

  var answers = [];
  each([1, 2, 3], function(num){ answers.push(num * this.multiplier); }, {multiplier: 5});
  deepEqual(answers, [5, 10, 15], 'context object property accessed');

  answers = [];
  each([1, 2, 3], function(num){ answers.push(num); });
  deepEqual(answers, [1, 2, 3], 'can iterate a simple array');

  answers = [];
  var obj = {one: 1, two: 2, three: 3};
  obj.constructor.prototype.four = 4;
  each(obj, function(value, key){ answers.push(key); });
  deepEqual(answers, ['one', 'two', 'three'], 'iterating over objects works, and ignores the object prototype.');
  delete obj.constructor.prototype.four;

  // ensure the each function is JITed
  // _(1000).times(function() { each([], function(){}); });
  var count = 0;
  obj = {1: 'foo', 2: 'bar', 3: 'baz'};
  each(obj, function(){ count++; });
  strictEqual(count, 3, 'the fun should be called only 3 times');

  var answer = null;
  each([1, 2, 3], function(num, index, arr){ if (include(arr, num)) answer = true; });
  ok(answer, 'can reference the original collection from inside the iterator');

  answers = 0;
  each(null, function(){ ++answers; });
  strictEqual(answers, 0, 'handles a null properly');

  each(false, function(){});

  var a = [1, 2, 3];
  strictEqual(each(a, function(){}), a);
  strictEqual(each(null, function(){}), null);
});
