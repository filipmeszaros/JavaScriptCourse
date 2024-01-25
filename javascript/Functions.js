/**
 * Functions represents block of code that can be executed
 * Anonymous functions - function without a name
 *                     - can be assigned to a variable
 */

console.log('Non-anonymous function addNumbers(5,4) returns: ' + addNumbers(5, 4)); // function can be executed even before its definition

/**
 * Non-anonymous function to return sum of numbers
 * @param a first number
 * @param b second number
 * @returns {*} sum of these numbers
 */
function addNumbers(a, b) {
    return a + b;
}

/**
 * Anonymous function to return sum of numbers
 */
let sumOfNumbers1 = function(a, b) {
    return a + b;
}

/**
 * Anonymous function to return sum of numbers.
 * You don't have to use function keyword if you use => instead
 */
let sumOfNumbers2 = (a, b) => {
    return a + b;
}

/**
 * Anonymous function to return sum of numbers.
 * You don't have to use function keyword if you use => instead
 */
let sumOfNumbers3 = (a, b) => (a + b);


console.log('Anonymous function 1 for the same code returns: ' + sumOfNumbers1(5, 4));
console.log('Anonymous function 2 for the same code returns: ' + sumOfNumbers2(5, 4));
console.log('Anonymous function 3 for the same code returns: ' + sumOfNumbers3(5, 4));

