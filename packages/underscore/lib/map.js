function map(list, iterate, context) {
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
module.exports = map;
