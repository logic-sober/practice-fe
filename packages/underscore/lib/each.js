function each(list, iterate, context) {
  if (list != null) {
  // eslint-disable-next-line no-plusplus
  if (list.constructor === Object) {
    for(let key in list){
if(list.hasOwnProperty(key))
      iterate(list[key], key, list);
    }

  }else{
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      iterate.call(context, element, index, list);
    }
  }
  }
  return list;
}
module.exports = each;

let answers = [];
var obj = {one: 1, two: 2, three: 3};
obj.constructor.prototype.four = 4;
each(obj, function(value, key){ answers.push(key); });
