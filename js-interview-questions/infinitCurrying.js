

// your task is to implement Addition function
// const res = Addition(2)(5)(4)();

function Addition(a){
    return function(b){
        if(b){
            return Addition(a+b);
        }else{
            return a;
        }
    }
}

const res = Addition(2)(5)(4)();
console.log(res);