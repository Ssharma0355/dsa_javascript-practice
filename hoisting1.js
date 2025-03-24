myFun();//1st call

var myFun = function(){
    console.log("1st");
}
myFun();

function myFun(){
    console.log("2nd");
}
myFun();

