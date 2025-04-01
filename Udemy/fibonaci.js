function finbonaci(n){
    if(n<=1) return n;
    return finbonaci(n-1)+finbonaci(n-2);
}
console.log(finbonaci(5));