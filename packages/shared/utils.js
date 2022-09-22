function deepEqual(value, result, message) {
  it(message, function() {
    expect(value).toStrictEqual(result);
  })
}


module.exports = {
  deepEqual,
  noop: function() {}
}
