import { useEffect, useState } from "react"

export default function Lifecycle(){

    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("component mounted on the first time rendering of the component");
    },[]);

    useEffect(()=>{
        return(()=>{
            console.log("component unmounted on the removal of the component or ending of the component means with the help of the return")
        })
    },[]);

    useEffect(()=>{
        console.log("componet updated on the change of the value of any variable");
    },[count]);

    function updateVal(){
        setCount(prev => prev + 1);
    }

    return(
        <div id="main-container">
            <h1>{count}</h1>
            <button onClick={updateVal}>click me</button>
        </div>
    )
}