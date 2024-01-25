/**
 * Module is a way of exporting a class or a method from one file, so that you can use it in other files.
 * Creates a simple class Person
 * module.exports exports this class so that we can import it in second class @see {@link ModulesImport}
 */

module.exports = class Person {
    firstname;
    lastname;

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    printPersonDetails() {
        console.log('Full name of a person is: ' + this.firstname + ' ' + this.lastname);
    }
}