


const arr = [2,1,9,4,5];
console.log(getlargestNumber1(arr));
console.log(getlargestNumber2(arr));

//1st approach
function getlargestNumber1(arr){
    let largest = arr.sort((a,b)=>b-a);
    return largest[0];

}

//2nd approach
function getlargestNumber2(arr){
    let largest = arr[0];

    for (let i=0;i<arr.length;i++){ //loop for array
        if(arr[i]>largest){//checking whether the element of array is greater than the largest element or not
            largest = arr[i];//if the element of array is greater than the largest element then set the element to largest
        }
    }
    return largest;
}

