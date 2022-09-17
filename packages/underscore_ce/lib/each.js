function each(array, iteratee, context) {
  for (let key in array) {
    if (array.hasOwnProperty(key)) {
      iteratee.call(context, array[key], isNaN(+key) ? key : +key, array)
    }
  }
  return array;
}

module.exports = each;
