/*
//Inheritance, Method Overriding
class Animal {
    constructor(type) {
        this.type = type;
    }

    makeSound() {
        console.log(`${this.type} makes a generic sound.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super('Dog');   // calls the constructor of parent class
        this.name = name;
    }

    makeSound() {
        super.makeSound();  // calls the method from the parent class
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex');
dog.makeSound();
*/

//Access Modifiers: they provide a way to limit the access of the data in the class to a specific scope.
// Protected data
/*
class Vehicle {
    constructor(speed) {
        if(this.constructor === Vehicle) {
            throw new Error("Abstract classes cannot be instantiated.")
        }

        this.speed = speed
    }
}

class Car extends Vehicle {
    constructor(speed) {
        super(speed);
    }

    getSpeed() {
        return this.speed;
    }
}
// const car = new Car(60);
// console.log(car.getSpeed());
const car = new Vehicle(80);
console.log(car.getSpeed());
*/

/*
class Animal {
    #type;  // private member (class scoped)

    constructor(type) {
        this.#type = type;
    }

    // #sayHello() {   // private method
    //     console.log(`Say Hello`);
    // }

    makeSound() {
        // this.#sayHello();
        console.log(`${this.#type} makes a generic sound.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super('Dog');   // calls the constructor of parent class
        this.name = name;
    }

    makeSound() {
        console.log(this.type);
            
        super.makeSound();  // calls the method from the parent class
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex');
dog.makeSound();

*/
/*
// Getter/Setter Methods
class Person {
    #name;

    constructor(name) {
        this.#name = name;
    }

    get name() {    // getter method to get the data
        return this.#name;
    }

    set name(newName) { // setter method to modify the data
        if(newName.length > 0) {
            this.#name = newName;
        } else {
            console.log('Name cannot be empty.');
        }
    }
}

const person = new Person("Alice");
console.log(person.name);
person.name = "Bob";
console.log(person.name);
person.name = ''
*/

class MathUtilitites {
    static add(a, b) {
        return a+b;
    }

    static subtract(a, b) {
        return a-b;
    }
}

console.log(MathUtilitites.add(20, 3));
console.log(MathUtilitites.subtract(20, 3));