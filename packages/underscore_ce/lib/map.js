'use strict';

module.exports = map;

function map(collection, iterate, context = null) {
  if (!collection) return [];
  let result = [];
  for (let i = 0, l = collection.length - 1; i<=l; i++ ) {
    result.push(typeof iterate === 'string' ? collection[i][iterate] : iterate.call(context, collection[i], i, collection))
  }
  return result;
}
