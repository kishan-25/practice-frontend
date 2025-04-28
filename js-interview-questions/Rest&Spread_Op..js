// with array

// Rest operator
function addNumber(a, b, ...arg){
    var sum =  a + b;
    for(let i=0;i<arg.length;i++)
    {
        sum += arg[i];
    }
    return sum;
}

const sum = addNumber(2, 4, 5, 6, 7);
console.log(sum);

//Spread Operator
var names = ["ajay", "vivek", "kishan"];

function printNames(name1, name2, name3){
    console.log(name1);
    console.log(name2);
    console.log(name3);
}

printNames(...names);

//with Objects

var obj = {
    name: "kishan",
    age: 21,
    hobbies : ["volleyball", "singing"],
};

//rest
const {...rest} = obj;
console.log(rest);

const {
    name, age
} = obj;
console.log("name:", name); // same name hi likhne pdega other wise undefined hi aayga
console.log("age", age);

//spread

const newObj = {
    ...obj,
    age: 22
}

console.log(newObj);
console.log(obj);

