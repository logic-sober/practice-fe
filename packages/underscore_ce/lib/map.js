'use strict';

module.exports = map;

function map(collection, iterate, context = null) {
  if (!collection) return [];
  let result = [];
  for (let i = 0, l = collection.length - 1; i<=l; i++ ) {
    // 这里实现的有点瑕疵， 如果传字符串进来，underscore是lodash.get那种取值的，而不是只取一次
    result.push(typeof iterate === 'string' ? collection[i][iterate] : iterate.call(context, collection[i], i, collection))
  }
  return result;
}
