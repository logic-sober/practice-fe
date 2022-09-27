function reduce(data, iteratee, memo, context) {
  if (data == null) {
    return memo;
  }
  // 判断是否传递了第三个参数
  let initial = arguments.length >= 3;
  // 初始的遍历下标
  let index = 0;

  if (!initial) {
  // 如果用户没有传入默认值，那么就取数据的第一项作为默认值
  memo = data[index];// 新增
  // 所以遍历就要从第二项开始
  index += 1;// 新增
  }
  // 重置iteratee函数的this指向
  iteratee = iteratee.bind(context);

  for (let i = index; i < data.length; i++) {
   memo = iteratee(memo, data[i], i, data);
  }
  return memo;
}

// 绑定函数 使用call进行绑定
function bind(fn, context) {
  // 返回一个匿名函数，执行时重置this指向
  return function (memo, value, index, collection) {
    return fn.call(context, memo, value, index, collection);
  };
}
module.exports = reduce;
