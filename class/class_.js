//class

class Rectangle {
    constructor() {
        console.log("Rectangle class is created");
        this.width = 5;
        this.height = 2;
        this.color = 'blue';
    }

}
obj1 = new Rectangle();
obj2 = new Rectangle();
/* console.log(obj1)
console.log(obj2) */

class Rectangle_2 {
    constructor(_width, _height, _color) {
        console.log("Rectangle class is created");
        this.width = _width;
        this.height = _height;
        this.color = _color;
    }
    getArea() {
        return this.width * this.height
    }
    printDescription() {
        console.log("iam rectangle with height" + this.height + " width" + this.width);
    }

}
/* let rect1 = new Rectangle_2(3, 5, 'black');
let rect2 = new Rectangle_2(3, 4, "blue");
console.log(rect1);
console.log(rect2);
//getting the properties
console.log(rect1.color);

console.log(rect1.getArea());
rect2.printDescription(); */


/* 
function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    }
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};

//Defining a Teacher() constructor function
//The first thing we need to do is create a Teacher() constructor — add the following below the existing code:

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);

    this.subject = subject;
}

function Brick() {
    this.width = 10;
    this.height = 20;
}

function BlueGlassBrick() {
    Brick.call(this);
    this.opacity = 0.5;
    this.color = 'blue';
    return this.width
}
console.log(BlueGlassBrick()); */



// getter and setter
class Person {
    constructor(_name, _role) {
        this.name = _name;
        this.jobRole = _role;
    }

    //static methos this will be accessed using class not object and this keyword is not valid here
    static results(age) {
            return age
        }
        //get method which will give you the values of the object
    get name1() {
            return this.name;
        }
        //set method, which will set the value of the object
    set name1(_name) {
        this.name = _name;
    }
}
let per1 = new Person('srikanth', 'full-stack developer')
console.log(per1.name1);
per1.name1 = 'vishnu';
console.log(per1.name1);
console.log(per1.results); //this will show undefined
console.log(Person.results(20)) //




//inheritance : extends

class Person_details {
    constructor(_name, _age) {
        this.name = _name
        this.age = _age


    }
    describe() {
        console.log(`I am ${this.name} and I am ${this.age} years old`);

    }
}
class Programmer extends Person {
    constructor(_name, _age, _yearofExperience) {
        super(_name, _age);
        //custom behaviour
        this.yearofExperience = _yearofExperience
    }
    code() {
        console.log(`${this.name} is coding`)
    }


}

let programmer1 = new Programmer('srikanth', 25, 1);
let person1 = new Person_details('srikanth', 25)
console.log(programmer1);
console.log(person1);

//we can get the all the methods and properties of the parent from the child class
// but we can't child class details from the parent class object
console.log(person1.yearofExperience) //undefined
console.log(programmer1.yearofExperience) //1

const programmers = [
    new Programmer('dom', 56, 3),
    new Programmer('jeff', 56, 3)
]

function getsoftwares(programmers) {
    for (let programmer of programmers) {
        programmer.code();
    }
}
getsoftwares(programmers)


//polymorphism

class Animal {
    constructor(name) {
        this.name = name;

    }
    makesounds() {
        console.log('Generic Animal sound')
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makesounds() {
        console.log('woof woof!');
    }
}

a1 = new Animal('dog');
a2 = new Dog('dog');
a1.makesounds()
a2.makesounds()
