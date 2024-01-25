/**
 * Module is a way of exporting a class or a method from one file, so that you can use it in other files.
 * In this file, we are importing a class from file @see {@link ModulesDefinition}
 * require('path/ModuleName') - imports module method/class so that you can use it in this file
 */

const Person = require('./ModulesDefinition'); // Import a class Person from file ModulesDefinition

let myPerson = new Person('MyFirstname', 'MyLastname');

myPerson.printPersonDetails();