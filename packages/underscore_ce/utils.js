function base(type, value, result, message) {
  it(message, function () {
    expect(value)[type](result);
  });
}

function deepEqual(value, result, message) {
  base('toEqual', value, result, message);
}

function strictEqual(value, result, message) {
  base('toStrictEqual', value, result, message);
}

function ok(value, message) {
  base('toBe', value, true, message);
}

module.exports = {
  deepEqual,
  strictEqual,
  noop: function noop() {},
  ok,
  keys: Object.keys,
  toArray: Array.from
};
