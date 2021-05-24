// getter function : this will get the values in the objects

var person = {
    name: 'srikanth',
    account_type: 'savings',
    balance: 100000,
    get balanc() { // we shoudn't use the same name as variable 
        return this.balance // if you use same name as property name then it will call the function instead getting the values of the variable
    }
};
console.log(person.balanc);


//setter function : to set the value to the properties 

var employee = {
    emp_name: 'kaushik',
    emp_role: 'full-stack',
    emp_sal: 30000,
    set increment(sal) {
        this.sal = sal;

    }
};
employee.increment = 35000
console.log(employee.sal);


// Define object
var obj = { counter: 0 };

// Define setters
Object.defineProperty(obj, "reset", {
    get: function() {
        this.counter = 0;

    }

});
Object.defineProperty(obj, "increment", {
    get: function() {
        this.counter++;
    }
});

Object.defineProperty(obj, "decrement", {
    get: function() { this.counter--; }

});
Object.defineProperty(obj, "add", {
    set: function(value) { this.counter += value; }

});
Object.defineProperty(obj, "subtract", {
    set: function(value) { this.counter -= value; }

});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
console.log(obj.reset);

const object1 = {};

Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: true
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);



// defining the new property for



//JavaScript Object Constructors
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
//Objects of the same type are created by calling the constructor function with the new keyword:
myFather = new('sambaiah', 'gattu', 60, 'black');


/*Adding a Property to an Object
Adding a new property to an existing object is easy:*/
myFather.nationality = "English";


//Adding a Method to an Object
myFather.name = function() {
    return this.firstName + " " + this.lastName;
};


//Adding a Method to a Constructor
//Your constructor function can also define methods:

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function() { return this.firstName + " " + this.lastName; };
}





//JavaScript Object Prototypes
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");


//We can not add a new property to an existing object constructor:
Person.firstName = 'Srikanth';
console.log(Person.firstName) // we can get the output
console.log(myFather.firstName); // the changes will not reflected on the objects


//To add a new property to a constructor, you must add it to the constructor function:
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English"; // this is same for all the objects until we change the value
}
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
myFather.new = 'new';
console.log(myFather.new)