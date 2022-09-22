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
