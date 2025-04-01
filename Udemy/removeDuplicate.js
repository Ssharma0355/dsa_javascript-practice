function removeDuplicate(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicate([1,3,4,2,11,11,3,2,5,6,7]));