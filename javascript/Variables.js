// Single line comment

/**
 * Variables (var, let, const)
 * Re-assigning means that you try to assign value to a variable multiple times, e.g. "var abc = 4; abc = 6;"
 * Re-declaring means that you try to declare variable multiple times, e.g. "var abc = 4; var abc = 6"
 * var = you can re-assign and re-declare variable; Scope of var variable is global or defined in a function
 * let = you can re-assign, but you CANNOT re-declare; Scope of let variable is global or defined in a block
 * const = you CANNOT re-declare and you CANNOT re-assign
 *
 *
 *
 * JavaScript has 8 Datatypes
 * 1. string
 * 2. number
 * 3. bigint
 * 4. boolean - true/false
 * 5. undefined - variable without a value
 * 6. null
 * 7. symbol
 * 8. object - can contain an array, object, date
 */
var variable1 = 2;
var variable1 = 4; // re-declaring of variable
variable1 = 6;             // re-assigning of variable

console.log('Data type of variable2 is: ' + typeof (variable1));
console.log('Variable value is: ' + variable1);

let str1 = "He is called 'Johnny'";


// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2023-11-02");

let var2 = undefined;
let var3;      // variable will have "undefined" state

var var4 = null;

let exponentialNotation1 = 123e5;    // 12300000
let exponentialNotation2 = 123e-5;   // 0.00123

let bigInt1 = BigInt("123456789012345678901234567890");


/**
 * Scope of VAR, LET variables.
 * Scope of VAR - function scoped; the variable declared inside a function with var can be used anywhere within a function.
 * Scope of LET - block scoped;    the variable declared with let can only be accessed inside a block of code -> preferred
 */
// program to print text
// variable a cannot be used here
function greet1() {
    // variable a can be used here
    var a = 'hello';
    console.log(a);
}
// variable a cannot be used here

greet1(); // hello


// variable b cannot be used here
function greet2() {
    let b = 'hello';

    // variable c cannot be used here
    if (b == 'hello') {
        // variable c can be used here
        let c = 'world';
        console.log(b + ' ' + c);
    }

    // variable c cannot be used here, because the scope is a block
    // console.log(b + ' ' + c); // will throw an error
}
// variable b cannot be used here

greet2();