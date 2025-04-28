function sq(num){
    return num*num;
}

const memoize = (funcsq) => {
    let cache = {};
    return function(...args){
        let num = args[0];
        if(num in cache){
            console.log("num is in cache");
            return cache;
        } else {
            console.log("calculating first time");
            var result = sq(num);
            cache[num] = result;
            return cache[num];
        }
    }
}

const efficient = memoize(sq);
console.log(efficient(5));
console.log(efficient(5));