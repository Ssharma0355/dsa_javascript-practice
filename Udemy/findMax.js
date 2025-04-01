function findMax(arr){
  return Math.max(...arr); //0(n) The ... (spread operator) expands the array into arguments for Math.max().
}
console.log(findMax([1,2,3,4,5,6,79,8,9,10]));//10