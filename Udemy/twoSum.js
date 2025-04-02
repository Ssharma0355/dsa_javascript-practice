
//find 2 number that can be sum and equal to the target

console.log(twoSum([2,7,13,3],9));
function twoSum(arr,target){
    let map = new Map();//hashtable
    for(let i=0;i<arr.length;i++){
        let complement = target = arr[i];
        if(map.has(complement)){
            return [map.get(complement),i]
        }

        map.set(arr[i],i);
    }
    return[];
}