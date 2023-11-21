/**
 * Array is a collection of elements.
 * It allows you to perform powerful methods like Reduce, Filter, Map (like Streams in Java)
 */


let emptyArray = Array(6); // Creates an array of 6 elements with values "undefined"
console.log(emptyArray[1]);


let daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log('First element of array is: ' + daysArray[0]);
console.log('Printing whole array: ' + daysArray);
console.log('Length of array is: ' + daysArray.length);  // Returns length of an array

emptyArray.push(42); // Adds new element to an array
console.log(emptyArray); // Prints [<6 empty items>, 42] - because we defined an array containing 6 elements first
emptyArray.unshift('FIRST'); // Adds new element to the beginning of an array
console.log(emptyArray); // Prints ['FIRST', <6 empty items>, 42]

daysArray.push('new item'); // Adds new element to an array
daysArray.pop(); // Removes last element from an array

console.log('Index of Wednesday is: ' + daysArray.indexOf('Wednesday'));    // Returns index of given element
console.log('FREE DAY is in the array: ' + daysArray.includes('FREE DAY')); // Checks if element is in the array

let workingDays = daysArray.slice(0, 5);              // Returns a copy of a section of an array, from index 0 to index 5
let nonWorkingDays = daysArray.slice(5, undefined);   // Returns a copy of a section of an array, from index 5 to the end

console.log('Working days: ' + workingDays);
console.log('Non-working days: ' + nonWorkingDays);

let fruits = ['banana', 'apple', 'mango', 'orange', 'kiwi', 'peach'];
console.log('Sorted fruits: ' + fruits.sort());         // Sorts array
console.log('Sorted fruits and reversed: ' + fruits.reverse()); // Reverts array that was previously sorted

var numbers = [12, 03, 15, 20, -5];
console.log('Sorted numbers (without logic): ' + numbers.sort()); // Sorts array which can end up in wrong results
console.log('Sorted numbers (with logic): ' + numbers.sort((a, b) => a - b)); // Sorts array which can end up in wrong results

/**
 * Iterating through the array
 */
for (let i = 0; i < workingDays.length; i++) {
    console.log('Iterating through all working days: ' + workingDays[i]);
}

/**
 * Reduce
 * Performs operation over all elements in an array and returns a reduced result
 * Syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
 * Alternative: reduceRight() does the same thing, but iterates over elements from the end of the array to the beginning
 */
var arrayOfNumbers = [5, 10, 15, 25, 100, 1000];
// Anonymous function that will add current element to sum, starting from sum 0
var reduceResult = arrayOfNumbers.reduce((sum, element) => sum + element, 0);
console.log('Result of reduce() method to sum up numbers is: ' + reduceResult);

/**
 * Filter
 * Method creates a new array filled with elements that pass a test provided by a function.
 * Syntax: array.filter(function(currentValue, index, arr), thisValue)
 */
var arrayOfNumbers = [5, 10, 15, 18, 14, 7, 12, 150, 121];
var filteredArray = arrayOfNumbers.filter(value => value % 2 === 0);
console.log('Result of filter() method for checking even numbers is: ' + filteredArray);

var filteredArray2 = arrayOfNumbers.filter(value => value >= 18);
console.log('Result of filter() method for checking numbers higher or equal than 18 is: ' + filteredArray2);


/**
 * Map
 * Creates a new array from calling a function for every array element.
 * Syntax: array.map(function(currentValue, index, arr), thisValue)
 */
let uppercasedArray = workingDays.map(item => item.toUpperCase());
console.log('Result of map() method for uppercasing all elements is: ' + uppercasedArray);
let doubledArrayOfNumbers = arrayOfNumbers.map(item => item * 2);
console.log('Result of map() method for doubling all elements is: ' + doubledArrayOfNumbers);


/**
 * Advanced stuff - chaining of Filter/Map/Reduce
 * You can combine operations for filter/map/reduce and chain them together
 */

// Task: filter out even numbers and return a sum of these numbers which is multiplied by 3
var arrayOfNumbers = [2, 7, 8, 10, 15, 25];
const result = arrayOfNumbers
    .filter(item => item % 2 === 0)           // Filter only even numbers
    .map(item => item * 3)                    // Multiply all filtered numbers by 3
    .reduce((sum, currentVal) => sum + currentVal, 0); // Sum up all filtered and multiplied numbers
console.log('Result of chained filter/map/reduce methods is: ' + result);

// Task: print out only uppercased working days in 3 character format
const allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const uppercasedWorkingDays = allDays
    .filter(item => (item !== 'Saturday' && item !== 'Sunday'))  // Filter all days except Saturday and Sunday
    .map(item => item.slice(0, 3))    // Re-save all filtered days to 3 character format
    .map(item => item.toUpperCase())  // Call map again to uppercase our 3 character format
console.log('Result of chained filter/map/map method for uppercased working days is: ' + uppercasedWorkingDays);