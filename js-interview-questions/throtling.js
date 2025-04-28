
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