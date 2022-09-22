function each1(array, iterate, context) {
  for (let key in array) {
    if (array.hasOwnProperty(key)) {
      console.log('打印的结果：'+isNaN(+key));
      iterate.call(context, array[key], key , array)
    }
  }
  return array;
}

module.exports = each1;

// 遍历list中的所有元素，按顺序用每个元素当做参数调用 iteratee 函数。
// 如果传递了context参数，则把iteratee绑定到context对象上。每次调用iteratee都会传递三个参数：
// (element, index, list)。如果list是个JavaScript对象，iteratee的参数是 (value, key, list))。返回list以方便链式调用。
//      iterate.call(context, array[key], isNaN(+key) ? key : +key, array)
//isNaN()来判断一个数值是不是一个非数字

// each1([1,2,3],function(num, i) {
//   strictEqual(num, i + 1, 'each iterators provide value and iteration count');
// })

// describe('each', function() {
//   each([1, 2, 3], function(num, i) {
//     strictEqual(num, i + 1, 'each iterators provide value and iteration count');
//   });
