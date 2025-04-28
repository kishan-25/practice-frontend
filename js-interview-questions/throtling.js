// "Allow the function to be called at most once in every X milliseconds, no matter how often the event happens."

// Even if the user triggers the event 1000 times, it will run the function once every X ms.

// Use case: Scroll event, resize event, button spam prevention.

const mythrottle=(fn, delay)=>{
    return function(...args){
        document.getElementById("myid").disabled = true;
        setTimeout(()=>{
            fn();
        }, delay);
    }
}

const newFun = mythrottle(()=>{
    document.getElementById("myid").disabled = false;
    console.log("User clicked after 2 sec");
},2000);