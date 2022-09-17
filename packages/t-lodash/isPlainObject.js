function getType(anyData) {
  return Object.prototype.toString.call(anyData).slice(8, -1).toLowerCase();
}
module.exports = function(anyData) {
  return getType(anyData) === 'object';
}
