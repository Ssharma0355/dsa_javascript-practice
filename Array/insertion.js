let data = [12, 3, 22, 1, 44, 5, 33];
let newEl = 69;
let position = 3;
console.log("Before Insertion",data)
for(let i=data.length-1;i>=0;i--){ 
    //starting array from 7 to 1
    if(i>=position){
      //iterator is equal to position(3)
      data[i + 1] = data[i]; 
      // pushing element forward [12, 3, 22, 1,1, 44, 5, 33]
      if (i == position) {
        //if iterator is exact equal to 3
        data[i] = newEl; //inserting newEL=69 on data[3] [12, 3, 22, 69,1, 44, 5, 33]
      }
    }

}
console.log("After Insertion",data);