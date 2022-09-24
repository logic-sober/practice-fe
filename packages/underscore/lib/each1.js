function each1(array, iterate, context) {
  // eslint-disable-next-line
  for (let key in array) {
    if (array.hasOwnProperty(key)) {
      iterate.call(context, array[key], isNaN(+key) ? key : +key, array);
    }
  }
  return array;
}

module.exports = each1;
