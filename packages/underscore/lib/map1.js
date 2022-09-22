function map1(list, iterate, context) {
  const result = [];
  if (list != null) {
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      result.push(iterate.call(context, element, index, list));
    }
  }
  return result;
}
module.exports = map1;
// 通过对 list 里的每个元素调用转换函数(iterate迭代器)生成一个与之相对应的数组。iterate传递三个参数：value，
// 然后是迭代 index(或 key 愚人码头注：如果list是个JavaScript对象是，这个参数就是key)，最后一个是引用指向整个list
