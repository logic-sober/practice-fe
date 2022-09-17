const { falsey, stubArray } = require("./utils");
const chunk = require('../chunk');
const lodashStable = require('lodash');

describe('chunk', function() {
  var array = [0, 1, 2, 3, 4, 5];

  it('should return chunked arrays', function() {
    var actual = chunk(array, 3);
    expect(actual).toStrictEqual([[0, 1, 2], [3, 4, 5]]);
  });

  it('should return the last chunk as remaining elements', function() {
    var actual = chunk(array, 4);
    expect(actual).toStrictEqual([[0, 1, 2, 3], [4, 5]]);
  });

  // it('should treat falsey `size` values, except `undefined`, as `0`', function() {
  //   var expected = lodashStable.map(falsey, function(value) {
  //     return value === undefined ? [[0], [1], [2], [3], [4], [5]] : [];
  //   });
  //   console.log(expected);
  //   var actual = lodashStable.map(falsey, function(size, index) {
  //     return index ? chunk(array, size) : chunk(array);
  //   });

  //   expect(actual).toStrictEqual(expected);
  // });

  // it('should ensure the minimum `size` is `0`', function() {
  //   console.log(stubArray);
  //   var values = lodashStable.reject(falsey, lodashStable.isUndefined).concat(-1, -Infinity),
  //       expected = lodashStable.map(values, stubArray);

  //   console.log(values, expected);

  //   // var actual = lodashStable.map(values, function(n) {
  //   //   return chunk(array, n);
  //   // });

  //   // expect(actual).toStrictEqual(expected);
  //   expect(1).toBe(1);
  // });

  // it('should coerce `size` to an integer', function() {
  //   expect(chunk(array, array.length / 4)).toStrictEqual([[0], [1], [2], [3], [4], [5]]);
  // });
});
