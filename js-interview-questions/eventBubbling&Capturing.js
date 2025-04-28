//event bubbling child to parent

//capturing parent to child

{/* <body>
    <div>
        <button>like me</button>
    </div>
</body> */}

var div = socument.querySelector("div");
var button = document.querySelector("button");

div.addEventListener("click", ()=>{
    console.log("div");
}, true) //true shows capturing

button.addEventListener("click", (event)=>{
    console.log("button");
}, true)

//Stop propagation, Immediate propagation and prevent Default
button.addEventListener("click", (event)=>{
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
    console.log("button");
})