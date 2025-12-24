
// Data Types in JavaScript:
console.log("=================================");
console.log("Data Types in Javascript");

/*

Primitive Types (Immutable): Stored directly in the stack (execution context).

1. String
2. Number (Floats and Integers are both type number)
3. Boolean (true, false)
4. Undefined
5. Null
6. Symbol (ES6 - unique identifiers) - used for object property keys to avoid name collisions (figma, react internals)
7. BigInt (ES2020 - for integers larger than 2^{53} - 1)

*/

console.log("---- Primitive Types ----");

// Example of Primitive Types
let name1 = "Cillian Murphy"; // String
const age = 45;
let isActive = true; // Boolean
let something; // Undefined
let otherThing = null; // Null
let uniqueId = Symbol("id");
let bigNumber = BigInt(9007199254741991); // BigInt

console.table({ name1, age, isActive, something, otherThing, uniqueId, bigNumber });

/*
Non-Primitive / Reference Types (Mutable)
Stored in the heap; the variable holds a pointer (reference) to the location in memory.

Objects (Arrays, Functions, Maps, Dates, etc.)
*/

console.log("---- Non-Primitive / Reference Types ----");
// Example of Reference Types

let movieList = ["28 Days Later", "Inception", "Dunkirk"]; // Array
let person = { name: "Cillian Murphy", age: 45, occupation: "Actor" }; // Object
function greet() { // Function
  return `Hello, my name is ${person.name}.`;
}
let currentDate = new Date(); // Date Object
let idMap = new Map(); // Map
idMap.set("id1", "value1");
console.table({ movieList, person});
console.log(greet());
console.log(`Current Date: ${currentDate}`);
console.log(idMap.get("id1"));
console.log("=================================");


// Note on Mutability
person.age = 46; // Modifying object property
movieList.push("Oppenheimer"); // Modifying array
console.table({ movieList, person });  