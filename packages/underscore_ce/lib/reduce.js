function reduce(array, iteratee, initial, context) {
  if (!array) return initial;
  const hasInitial = typeof initial === 'undefined';
  let r = hasInitial ? array[0] : initial;
  let i = hasInitial ? 1 : 0;
  for (let l = array.length; i < l; i++) {
    r = iteratee.call(context, r, array[i], i, array);
  }
  return r;
}

module.exports = reduce;
