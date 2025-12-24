// Type Conversions

console.log("=================================");
console.log("Type Conversions in Javascript");

// Implicit Type Coercion
// String Coercion (+ operator): If one operand is a string, the other is converted to a string.

console.log("String Coercion (+ operator): If one operand is a string, the other is converted to a string.");
console.log("5" + 3); // '53'
console.log("5" + null); // '5null'

console.log("Hello, " + true); // 'Hello, true'
console.log("=================================");
// Numeric Coercion (-, *, /): Strings are converted to numbers.

console.log("Numeric Coercion (-, *, /): Strings are converted to numbers.");

console.log("5" - 3); // 2
console.log("5" * "2"); // 10

console.log("10" / "2"); // 5

console.log("=================================");

// Boolean Coercion: Happens in if statements or logical operators.
// Falsy Values: 0, "" (empty string), null, undefined, NaN, false.
// Truthy Values: Everything else (including empty arrays [] and empty objects {}).

console.log("Boolean Coercion: Happens in if statements or logical operators.");
if ("") {
    console.log("This won't run because '' is falsy.");
} else {
    console.log("'' is falsy.");
}

if ([]) {
    console.log("[] is truthy.");
}

console.log("=================================");
// Explicit Conversion (Manual)
// Number('5')
// String(123)
// Boolean(1)
// parseInt('10.5') -> 10
// parseFloat('10.5') ->10.5
console.log("Explicit Conversions:");
console.log(Number("5"));
console.log(String(123));
console.log(Boolean(1));
console.log(parseInt("10.5"));
console.log(parseFloat("10.5"));
console.log("=================================");



//Note: Be careful with NaN (Not a Number). It is technically of type number but represents an invalid calculation (e.g., 'hello' * 3). Use isNaN() to check. */

console.log("NaN Example:");
let result = "hello" * 3;
console.log(result);

let x = "123abc";
let num = Number(x);
if (isNaN(num)) {
    console.log(`'${x}' cannot be converted to a valid number.`);
} else {
    console.log(`Converted number: ${num}`);
}
console.log("type of num (number(123abc)): ", typeof(num));

console.log("=================================");