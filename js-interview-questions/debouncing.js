//"Wait until the user stops doing something for a certain time, and then run the function once."
let counter = 0;
function getData(){
    console.log("fetching Data"+counter++);
}

function myDebounce(callbackfunc, delay){
    let timer;
    return function(...args){
        if(timer) 
            clearTimeout(timer);
        timer = setTimeout(()=>{
            callbackfunc();
        }, delay)
    }
}

const BetterFunc = myDebounce(getData, 1000);
BetterFunc();