let day = '  Tuesday  ';

console.log('Uppercased string: ' + day.toUpperCase());
console.log('Trimmed string: ' + day.trim());
console.log('String with trimmed end only: "' + day.trimEnd() + '"');
console.log('Substring of string: ' + day.slice(2, 5));

const splitString = day.split('s');  // Split string to array with a separator 's'
console.log('Split string, part 1: "' + splitString[0] + '"');
console.log('Split string, part 2: "' + splitString[1] + '"');

console.log('Typeof split string: ' + typeof splitString[0]); // Returns type of any variable

console.log('Two strings converted to a number and subtracted: ' + (parseInt('25') - parseInt('20')));
const number1 = 3.1415;
console.log('Number is: ' + number1 + '. Typeof is: ' + typeof number1);
const string1 = number1.toString();  // Converts a variable to a string
console.log('Number converted to string: ' + string1 + '. Typeof is: ' + typeof string1);

console.log('Index of substring "day" is: ' + day.indexOf("day"));