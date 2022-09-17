const lodashStable = require('lodash');

const {
  document,
  create,
  objectProto,
  falsey,
  stubFalse,
  symbol,
  defineProperty,
  realm,
} = require('./utils.js');

const isPlainObject = require('../isPlainObject.js');

describe('isPlainObject', function() {
  var element = document && document.createElement('div');

  it('should detect plain objects', function() {
    function Foo(a) {
      this.a = 1;
    }

    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ 'a': 1 })).toBe(true);
    expect(isPlainObject({ 'constructor': Foo })).toBe(true);
    expect(isPlainObject([1, 2, 3])).toBe(false);
    // expect(isPlainObject(new Foo(1))).toBe(false);
  });

  it('should return `true` for objects with a `[[Prototype]]` of `null`', function() {
    var object = create(null);
    expect(isPlainObject(object)).toBe(true);

    object.constructor = objectProto.constructor;
    expect(isPlainObject(object)).toBe(true);
  });

  it('should return `true` for objects with a `valueOf` property', function() {
    expect(isPlainObject({ 'valueOf': 0 })).toBe(true);
  });

  it('should return `true` for objects with a writable `Symbol.toStringTag` property', function() {
    if (Symbol && Symbol.toStringTag) {
      var object = {};
      object[Symbol.toStringTag] = 'X';

      expect(isPlainObject(object)).toBe(true);
    }
  });

  it('should return `false` for objects with a custom `[[Prototype]]`', function() {
    var object = create({ 'a': 1 });
    expect(isPlainObject(object)).toBe(false);
  });

  it('should return `false` for DOM elements', function() {
    if (element) {
      expect(isPlainObject(element)).toBe(false);
    }
  });

  it('should return `false` for non-Object objects', function() {
    expect(isPlainObject(arguments)).toBe(false);
    expect(isPlainObject(Error)).toBe(false);
    expect(isPlainObject(Math)).toBe(false);
  });

  it('should return `false` for non-objects', function() {
    var expected = lodashStable.map(falsey, stubFalse);

    var actual = lodashStable.map(falsey, function(value, index) {
      return index ? isPlainObject(value) : isPlainObject();
    });

    expect(actual).toBe(expected);

    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject('a')).toBe(false);
    expect(isPlainObject(symbol)).toBe(false);
  });

  it('should return `false` for objects with a read-only `Symbol.toStringTag` property', function() {
    if (Symbol && Symbol.toStringTag) {
      var object = {};
      defineProperty(object, Symbol.toStringTag, {
        'configurable': true,
        'enumerable': false,
        'writable': false,
        'value': 'X'
      });

      expect(isPlainObject(object)).toBe(false);
    }
  });

  it('should not mutate `value`', function() {
    if (Symbol && Symbol.toStringTag) {
      var proto = {};
      proto[Symbol.toStringTag] = undefined;
      var object = create(proto);

      expect(isPlainObject(object)).toBe(false);
      assert.ok(!lodashStable.has(object, Symbol.toStringTag));
    }
  });

  it('should work with objects from another realm', function() {
    if (realm.object) {
      expect(isPlainObject(realm.object)).toBe(true);
    }
  });
});
