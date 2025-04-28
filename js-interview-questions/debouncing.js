//"Wait until the user stops doing something for a certain time, and then run the function once."

// Debounce → "I’ll wait till you stop talking, then I’ll answer."

// Throttle → "I’ll answer once every 1 second, no matter how much you talk."

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