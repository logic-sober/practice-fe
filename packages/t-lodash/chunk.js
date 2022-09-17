module.exports = function chunk(arr, size) {
  if (!size) return arr;
  let i = 0;
  let l = arr.length - 1;
  let result = [];
  size = String(size).indexOf('.') > -1 || size === 0 ? 1 : size;

  while(i <= l) {
    result.push(arr.slice(i, i + size));
    i = i + size;
  }
  return result;
}
