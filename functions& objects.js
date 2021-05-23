// function declaration
//A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

function gender_check(gender){
if (gender == "male"){
return 'male';
}
}
console.log(gender_check("female"));


// function expression
const getRectArea = function(width, height) {
    return width * height;
  };
  
  console.log(getRectArea(3, 4));
  // expected output: 12

console.log(typeof getRectArea);


//Function expressions in JavaScript are not hoisted, unlike function declarations. You can't use function expressions before you create them:
console.log(notHoisted) // undefined
//  even though the variable name is hoisted, the definition isn't. so it's undefined.
//notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log('bar');

};
console.log(notHoisted())  // if it's not returning anything it will return 

console.log(und_variable); // this won't give an error even it's not treated as variable it will take below function but it's not executed
function und_variable(){
    return null
};


//ananymous function
(function() {
    console.log('Code runs!')
})();

// or

!function() {
  console.log('Code runs!')
}();



// Javaacript objects
//Using an Object Literal
/*This is the easiest way to create a JavaScript Object.

Using an object literal, you both define and create an object in one statement.

An object literal is a list of name:value pairs (like age:50) inside curly braces {}.

The following example creates a new JavaScript object with four properties: */
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

console.log(person.firstName); // getting the values of the objects
/*Using the JavaScript Keyword new
The following example also creates a new JavaScript object with four properties:*/
var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
/*JavaScript Objects are Mutable
Objects are mutable: They are addressed by reference, not by value.

If person is an object, the following statement will not create a copy of person:*/

var x = person; // person is above object but it will not save as copy but this is the reference of the object
x.firstName = 'srikanth' //here iam changing the object x
console.log(person.firstName); //I haven't changed the property firstname of the person but it's changed automatically after assigning to x object

// you can access the property of the object using the . operator or []
//below two will give same results
person['firstName'];
person.firstName

//JavaScript for...in Loop
for (x in person){
    console.log(x);   // this will give you the key of person objects/ or we can call property
    console.log(person[x])  //here this will give you the value of the key // here we should n't use the . operator to access a property value
}
//Deleting Properties
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
delete person.age;   // or delete person["age"];


//JavaScript Object Methods
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

// this keyword is used for methods

  



//JavaScript Object Prototypes
//All JavaScript objects inherit properties and methods from a prototype.





