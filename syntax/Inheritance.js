/**
 * Inheritance is a way of extending a super/parent class with some child class (subclass) that will have different implementation of methods, or new methods
 *
 * "extends"  - keyword to show that we are extending (creating a child class) another class
 * "super()"  - keyword for accessing a method from child class of a parent class
 */

const Person = require('./ModulesDefinition'); // Import a class Person from file ModulesDefinition

class Student extends Person {
    university;

    /**
     * You need to declare a constructor using the variables from parent class
     * @param firstname first name
     * @param lastname last name
     */
    constructor(firstname, lastname) {
        super(firstname, lastname);  // call a constructor of parent class
    }

    setUniversity(university) {
        this.university = university;
    }

    printUniversity() {
        console.log('University is: ' + this.university);
    }
}


let student1 = new Student('Filip', 'Meszaros');
let person1 = new Person('John', 'Doe');
// person1.setUniversity(); // you cannot set university for a parent class, because this method is only available for child classes

person1.printPersonDetails();  // you can call a method of parent class from a parent class
student1.printPersonDetails(); // you can call a method of parent class from a child class
// person1.setUniversity();    // you cannot call a method of child class from a parent class
student1.setUniversity('FI MUNI'); // you can call a method of child class from a child class
student1.printUniversity();    // you can call a method of child class from a child class