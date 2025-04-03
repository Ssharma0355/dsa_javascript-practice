const arr1 = [1,3,5,7,9,32,11];
const arr2 = [2,4,6,8,10,];

console.log(mergeSortedArray(arr1,arr2));


function mergeSortedArray(arr1,arr2){
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);

    let result = [];

    while(arr1.length && arr2.length){
        const next = (arr1[0]<arr2[0] ?arr1.shift() :arr2.shift()); //checking the first element of both the arrays and pushing the smallest element to the result array
        //comparing the first element of both the arrays and pushing the smallest element to the result array
        result.push(next);
    }

    return result.concat(arr1,arr2);
}

// 2nd approach but not effienct
function mergeSortedArray(arr1,arr2){
    return[...arr1,...arr2].sort((a,b)=>a-b);
}