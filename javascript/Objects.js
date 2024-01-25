/**
 * Object is a collection of properties (strings, numbers, functions, etc.)
 * It is useful for example if you have too many arguments in a method -> you can use object instead.
 */

let person = {
    name: 'Filip',
    lastname: 'Meszaros',
    yearOfBirth: 1991,
    bankAccountNumber: undefined,
    fullName: function () {
        return this.name + ' ' + this.lastname;
    }
}

console.log('Name of a person is: ' + person.name); // First way of accessing an attribute
console.log('Lastname of a person is: ' + person['lastname']); // Second way of accessing an attribute

console.log('Full name: ' + person.fullName());

console.log('Bank account number before assigning is: ' + person.bankAccountNumber);
person.bankAccountNumber = '4-8-15-16-23-42';
console.log('Bank account number after assigning is: ' + person.bankAccountNumber);
console.log('Check if property bankAccountNumber exist: ' + ('bankAccountNumber' in person));
delete person.bankAccountNumber; // Delete property of an object
console.log('Bank account number after deletion is: ' + person.bankAccountNumber);
console.log('Check if property bankAccountNumber exist: ' + ('bankAccountNumber' in person));

// Print whole object (except undefined keys)
for (let key in person) {
    console.log('Key ' + key + ' has a value: ' + person[key]);
}

console.log('Typeof of our object is: ' + typeof person);