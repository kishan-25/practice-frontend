//Original Object

const person = {
    name: "Happy",
    age : 22,
    address: {
        city: "Delhi",
        country: "India"
    }
};

//shallow copy using Object.assign()
const shalllowCopy = Object.assign({}, person);

shalllowCopy.address.city = "Mumbai";

console.log(person.address.city); //Output: "Mumbai"
console.log(shalllowCopy.address.city); //Output: "Mumbai"

//Deep copy using JSON.parse() and JSON.stringify()
const deepCopy = JSON.parse(JSON.stringify(person));

deepCopy.address.city = "Banglore";

console.log(person.address.city); //Output: "Delhi"
console.log(deepCopy.address.city); //Ouptut: "Banglore"