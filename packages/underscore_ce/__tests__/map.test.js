const map = require('../lib/map');
const { deepEqual, noop } = require('../utils');

describe('map', function(assert) {
  var doubled = map([1, 2, 3], function(num){ return num * 2; });
  deepEqual(doubled, [2, 4, 6], 'doubled numbers');

  var tripled = map([1, 2, 3], function(num){ return num * this.multiplier; }, {multiplier: 3});
  deepEqual(tripled, [3, 6, 9], 'tripled numbers with context');

  doubled = [1, 2, 3].map(function(num){ return num * 2; });
  deepEqual(doubled, [2, 4, 6], 'OO-style doubled numbers');

  var ids = map({length: 2, 0: {id: '1'}, 1: {id: '2'}}, function(n){
    return n.id;
  });
  deepEqual(ids, ['1', '2'], 'Can use collection methods on Array-likes.');

  deepEqual(map(null, noop), [], 'handles a null properly');

  deepEqual(map([1], function() {
    return this.length;
  }, [5]), [1], 'called with context');

  // Passing a property name like pluck.
  var people = [{name: 'moe', age: 30}, {name: 'curly', age: 50}];
  deepEqual(map(people, 'name'), ['moe', 'curly'], 'predicate string map to object properties');
});
