var sum = function(a){
    console.log("a : ", a);
    var c = 4;
    return function(b){
        console.log("a : ", a);
        console.log("b : ", b);
        console.log("c : ", c);
        return a+b+c;
    }
}

var store = sum(2);
console.log(store(5));

function sum(a, b, c){
    return {
        firstsum : function(){
            return a + b;
        },
        secondSum : function(){
            return a + b + c;
        }
    }
};

const store = sum(4, 5 , 6);
console.log(store.firstsum());
console.log(store.secondSum());