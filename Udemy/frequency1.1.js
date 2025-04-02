// Write a funtion name Same and it should return true if the every value of array1 have has square in array2 with same frequency.
//O(n2) time complexity

const arr1 = [2, 3, 1, 2];
const arr2 = [1,4,4,9];
console.log(same(arr1,arr2));

function same (arr1,arr2){
  // checking whether the length of the arrays are same or not
  if (arr1.length !== arr2.length) {
    return false;
  }
  //The function creates two objects (frequencyCounter1 and frequencyCounter2) to count how many times each value appears in each array.
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    // for of loop
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; // if the value is present in frequencyCounter1 then increment the value by 1 otherwise set the value to 1
  }
  for (let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1; // if the value is present in frequencyCounter2 then increment the value by 1 otherwise set the value to 1
  }

  for( let key in frequencyCounter1){
    if(!(key **2 in frequencyCounter2)){ //checking the square of the key of frequencyCounter1 in frequencyCounter2
      return false; //if the square of the key of frequencyCounter1 is not present in frequencyCounter2 then return false
    }

    if(frequencyCounter2[key**2]!== frequencyCounter1[key]){   //checking the frequency of the key of frequencyCounter1 in frequencyCounter2
        return false; //if the frequency of the square of the key of frequencyCounter1 is not equal to the frequency of the key of frequencyCounter1 then return false
    }
  }
  return true; //if all the elements of array1 have square in array2 with same frequency then return true   
}

