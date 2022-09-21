function reduce(array, iteratee, initial, context) {
  if (!array) return initial;
  const l = array.length;
  let i = l - 1;
  if (!initial) {
    // eslint-disable-next-line
    initial = array[i]
    i--;
  }
  for (; i >= 0; i--) {
    // eslint-disable-next-line
    initial = iteratee.call(context, initial, array[i], i, array);
  }
  return initial;
}

module.exports = reduce;
