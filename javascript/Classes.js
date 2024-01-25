/**
 * Class is a way of saving some attributes and methods to one entity.
 *
 * Constructor    - method of a class that is called after you create an object
 * Object         - instance of a class
 * "this."        - special keyword for referencing class variables
 * Inheritance    - you can extend a super/parent class with some child class (subclass) that will have different implementation of methods, or new methods
 */
class Car {
    year = 2024;
    location = 'Czechia';
    color = undefined

    /**
     * Constructor is a method that is automatically executed when you create an object of a class
     * @param valueOfFirstParameter color of a car that will be set
     */
    constructor(valueOfFirstParameter) {
        this.color = valueOfFirstParameter;
    }

    /**
     * Method without any parameters, that is not returning anything
     */
    someMethod() {
        console.log('This method is printing a year of a car: ' + this.year);
    }
}

let kiaSportage = new Car(); // Create an object of a class Car, without setting a color in a constructor

console.log('Printing year from an object: ' + kiaSportage.year);
console.log('Color of our first car: ' + kiaSportage.color);

let kiaSportageWithColor = new Car('Red'); // Create an object of a class Car, with setting of color in a constructor
console.log('Color of our second car: ' + kiaSportageWithColor.color);
kiaSportageWithColor.someMethod(); // Call a method without any parameters