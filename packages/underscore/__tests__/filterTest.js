const filter = require('../lib/filter');
const { strictEqual, deepEqual } = require('../utils');

describe('filter', () => {
  const evenArray = [1, 2, 3, 4, 5, 6];
  const evenObject = { one: 1, two: 2, three: 3 };
  const isEven = function (num) { return num % 2 === 0; };

 // deepEqual(filter(evenArray, isEven), [2, 4, 6]);
 // deepEqual(filter(evenObject, isEven), [2], 'can filter objects');
 // deepEqual(filter([{}, evenObject, []], 'two'), [evenObject], 'predicate string map to object properties');

  // filter([1], function () {
  //   strictEqual(this, evenObject, 'given context');
  // }, evenObject);

  // Can be used like _.where.
  const list = [{ a: 1, b: 2 }, { a: 2, b: 2 }, { a: 1, b: 3 }, { a: 1, b: 4 }];
 // deepEqual(filter(list, { a: 1 }), [{ a: 1, b: 2 }, { a: 1, b: 3 }, { a: 1, b: 4 }]);
  deepEqual(filter(list, { b: 2 }), [{ a: 1, b: 2 }, { a: 2, b: 2 }]);
  deepEqual(filter(list, {}), list, 'Empty object accepts all items');
});
