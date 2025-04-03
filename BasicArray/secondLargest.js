

function secondLargestNumber(arr){
    let largest = arr[0];
    let secondLargest =arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i]>secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
//2nd approach
// function secondLargest(arr){
//     let sortedArr = arr.sort((a,b)=>b-a) //sorting the array in descending order
//     return sortedArr[1]; //returning the second element of the sorted array
// }

const arr = [2,3,1,4,5];
// console.log(secondLargest(arr));
console.log(secondLargestNumber(arr));