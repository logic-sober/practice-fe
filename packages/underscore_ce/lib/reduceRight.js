function reduce(array, iteratee, initial, context) {
  if (!array) return initial;
  // 为了兼容对象
  const arrayValues = Object.values(array);
  const arrayKeys = Object.keys(array);
  const l = arrayValues.length;
  let i = l - 1;
  if (!initial) {
    // eslint-disable-next-line
    initial = arrayValues[i]
    i--;
  }
  for (; i >= 0; i--) {
    // eslint-disable-next-line
    initial = iteratee.call(context, initial, arrayValues[i], arrayKeys[i], array);
  }
  return initial;
}

module.exports = reduce;
