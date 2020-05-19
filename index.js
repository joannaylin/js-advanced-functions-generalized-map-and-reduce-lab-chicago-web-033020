function map(array, call) {
  let finalArray = []
  for (let i = 0; i < array.length; i++) {
    finalArray.push(call(array[i]))
  }
  return finalArray
}

function reduce(array, call, start){
  let r = (!!start) ? start : array[0]
  let i = (!!start) ? 0 : 1

  for (; i < array.length; i++) {
    r = call(array[i], r)
  }

  return r;
}