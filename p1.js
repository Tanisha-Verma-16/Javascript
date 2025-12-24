
// Function Scope (var): Variables are accessible anywhere inside the function they are declared in. If declared outside a function, they become global.

var occupation = "Actor";

// ==================================================

// Block Scope (let, const): Variables are only accessible within the specific block (e.g., inside an if statement or for loop) where they are defined.

let name = "Cillian Murphy";
const age = 45;

// ==================================================

// Temporal Dead Zone (TDZ): While let and const are technically hoisted, you cannot access them before their declaration line in the code. Doing so throws a ReferenceError.

// Interview Tip: Always default to const. Use let only when you know the variable's value needs to change (like a loop counter). Avoid var in modern JavaScript to prevent scoping bugs.

console.table({ name, age, occupation });

let greeting = `Hello, my name is ${name}. I am ${age} years old and I work as an ${occupation}.`;
console.log(greeting);

let movieList = ["28 Days Later", "Inception", "Dunkirk"];

// ==================================================

/* Null vs. Undefined
Both represent "no value," but they have distinct semantic meanings.
*/
/*
1. undefined: A variable has been declared but not yet assigned a value.

Origin: Usually automatically assigned by JavaScript.

Type: typeof undefined is "undefined".

*/
let something;
console.log(something); // undefined

/* 
2. null
Meaning: A deliberate assignment of "nothing" or "empty value." It represents the intentional absence of any object value.

Origin: Usually assigned by the developer.

Type: typeof null is "object" (This is a well-known bug in JS legacy). */



let otherThing = null; // NULL IS EMPTY NOT UNDEFINED
console.log(`The value of otherThing is: ${otherThing}`);





let isActive = true;
console.log(`Is ${name} active? ${isActive}`);

function getBirthYear(currentYear, age) {
    return currentYear - age;
}
let birthYear = getBirthYear(2024, age);
console.log(`${name} was born in ${birthYear}.`);

