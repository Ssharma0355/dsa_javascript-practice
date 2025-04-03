const arr1 = [1,3,5,7,9];
const arr2 = [2,4,6,8,10];

const mergeSortedArray = (arr1 =[],arr2 =[])=>{ 
    let result =[]; //creating an empty array to store the merged array
    //loop for both the arrays
    //while loop will run until one of the array is empty
    while(arr1.length && arr2.length){
        const next = (arr1[0]<arr2[0] ? arr1.shift():arr2.shift());
        // comparing the first element of both the arrays and pushing the smallest element to the result array
        //if the first element of arr1 is smaller than the first element of arr2 then push the first element of arr1 to the result array and remove that element from arr1
        //if the first element of arr2 is smaller than the first element of arr1 then push the first element of arr2 to the result array and remove that element from arr2
        //if both the elements are same then push the first element of arr1 to the result array and remove that element from arr1
        //if both the elements are same then push the first element of arr2 to the result array and remove that element from arr2
        result.push(next);
    }
    if(arr1.length){
     result =result.concat(arr1);//if arr1 is not empty then concatenate the arr1 to the result array
    }
    else if(arr2.length){
  result = result.concat(arr2); //if arr2 is not empty then concatenate the arr2 to the result array
    }
    return result;
}

console.log(mergeSortedArray(arr1,arr2));