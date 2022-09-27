function filter(list, iterate, context) {
  var type = typeof iterate;
  const newArray = [];
  for (let index in list){
    let isTrust=true;
    if(type === 'object'&& JSON.stringify(iterate) != "{}"){
      isTrust=isMatch(list[index],iterate);
    }else if(type === 'function'){
     isTrust = iterate.call(context,list[index], index, list);
    }
      if(isTrust){
        newArray.push (list[index]);
       }
    }

  return newArray;
}
//const list = [{ a: 1, b: 2 }, { a: 2, b: 2 }, { a: 1, b: 3 }, { a: 1, b: 4 }];
//deepEqual(filter(list, { a: 1 }), [{ a: 1, b: 2 }, { a: 1, b: 3 }, { a: 1, b: 4 }]);
// function isMatch(obj, attrs) {
//   let isMatch=false;
//   for (const [key, value] of Object.entries(obj)) {
//     var key1=`${key}`;
//     var value1=`${value}`;
//     for(const [key, value] of Object.entries(attrs)){
//       var key2=`${key}`;
//       var value2=`${value}`;
//       if( key1===key2 && value1===value2 ){
//         isMatch=true;
//         break;
//       }
//     }
//   }
//   return isMatch;
// }
function isMatch(object, attrs) {
  var _keys = keys(attrs), length = _keys.length;
  if (object == null) return !length;
  var obj = Object(object);
  for (var i = 0; i < length; i++) {
    var key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj)) return false;
  }
  return true;
}
function keys(attrs){
  var keys = [];
  for (var key in attrs) keys.push(key);
  return keys;
}

module.exports = filter;
//filter_.filter(list, predicate, [context]) Alias: select
//遍历list中的每个值，返回所有通过predicate真值检测的元素所组成的数组。
//predicate 通过 iteratee 进行转换，以简化速记语法。
//var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
