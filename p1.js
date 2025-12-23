let name = "Cillian Murphy";
const age = 45;
var occupation = "Actor";

console.table({ name, age, occupation });

let greeting = `Hello, my name is ${name}. I am ${age} years old and I work as an ${occupation}.`;
console.log(greeting);

let movieList = ["28 Days Later", "Inception", "Dunkirk"];

let something;
console.log(something); // undefined

let isActive = true;
console.log(`Is ${name} active? ${isActive}`);

function getBirthYear(currentYear, age) {
    return currentYear - age;
}
let birthYear = getBirthYear(2024, age);
console.log(`${name} was born in ${birthYear}.`);

let otherThing = null; // NULL IS EMPTY NOT UNDEFINED
console.log(`The value of otherThing is: ${otherThing}`);