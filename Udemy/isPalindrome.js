function isPalindrome(str){
    let res = str.split('').reverse().join('');
    return res === str;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));