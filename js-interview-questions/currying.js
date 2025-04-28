function Addition(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}
// let res = Addition(5);
// let secRes = res(3);
// let thirdRes = secRes(2);
// console.log(thirdRes);

let res = Addition(5)(3)(2); //this is currying
console.log(res);

userObj={
    name:"Ajay",
    age:28
}

function userInfo(obj){
    return function(userInfo){
        return obj[userInfo];
    }
}
let res1 = userInfo(userObj);
console.log(res1('age')); //op: 28