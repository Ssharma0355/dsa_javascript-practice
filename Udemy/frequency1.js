// Write a funtion name Same and it should return true if the every value of array1 have has square in array2 with same frequency.

arr1 = [1, 2, 3, 2];
arr2 = [9, 1, 4, 3];

console.log(same(arr1,arr2));

function same(arr1,arr2){
  // checking whether the length of the arrays are same or not
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    //loop for array1
    let correctIndex = arr2.indexOf(arr1[i] ** 2); //checking the square of the element of array1 in array2
    if (correctIndex == -1) {
      //if the square of the element of array1 is not present in array2 then return false
      return false;
    }
    arr2.splice(correctIndex, 1); //if the square of the element of array1 is present in array2 then remove that element from array2
  }
  return true; //if all the elements of array1 have square in array2 with same frequency then return true
}