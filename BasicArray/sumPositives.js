const arr = [2,3,-1,3,9];
console.log(sumofPositives(arr));
function sumofPositives(arr){
    let sum =0;
    for(let num of arr){ 
    if(num>0){
        sum += num
    }
  }
   return sum;
}