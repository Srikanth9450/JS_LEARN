//java script learning

// variable can be defined using three different keywords those are var,let,const
// let and const has come in ES6 verstion of javascript



//use of var
// we use var keyword to declare a variable in js like below and we use semicolon to separate the statement

var First_name,last_name,name

// we can assign a variable using "=" operator

first_name = 'Gattu';
last_name = 'Srikanth';
name=first_name+last_name;

//use of let
//before going to let keyword we just need to observe the block scope. observe below code

{
var x = 2;
}
/*In the above example x can be accessed outside the block but the let keyword accessed only inside
block*/
{
let x=2;
}
// we cann't access the variable x outside the block


// use of the keyword const

const name="srikanth";

// Note: after assigning the variable with const keyword we cann't make changes to variable if you try to change it, you will get an error


// data types in javascript
//numbers
// JavaScript has only one type of number. Numbers can be written with or without decimals.

var x=2.3;
var y=3;

// in javascript we can store the numbers in 64 bits means if you store upto 15 digit numbers it gives accurate values but after that 
// It can't give you the accurate values

var digit_below_15 = 999999999999999; #it will be stored accurately
var digit_above_15 = 99999999999999999; #it won't be stored accurately

//we can also use exponent in the numbers

var digit_exp = 4567e15;

// strings
// we can assign string values using single quoates or double quoates

var my_role='full-stack developer';


var my_role="full-stack developer";

//You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

var answer1 = "It's alright";
var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"';

//To find the length of a string, use the built-in length property:
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;


//The sequence \"  inserts a double quote in a string:
var x = "We are the so-called \"Vikings\" from the north.";
// if you use \' will get single quote and there are many things we can do using escape charecter


//boolean data type : this is used to store either true or false

var married=false;
var single=true;

//undefined : this means we have created a variable but not assigned value

var x;

//null: it is data where you can empty the object

var arr_1=[1,2,3,4,5]
arr=null // it shows nothing


//array
var cars = ["Saab", "Volvo", "BMW"];
//Spaces and line breaks are not important. A declaration can span multiple lines:

var cars = [
  "Saab",
  "Volvo",
  "BMW"
];
// second method to declare the array
var cars = new Array("Saab", "Volvo", "BMW");


//Access the Elements of an Array

/*You access an array element by referring to the index number.

This statement accesses the value of the first element in cars:*/

var name = cars[0];


/*Changing an Array Element
This statement changes the value of the first element in cars:*/

cars[0] = "Opel";



/*Array Properties and Methods
The real strength of JavaScript arrays are the built-in array properties and methods:*/

var x = cars.length;   // The length property returns the number of elements
var y = cars.sort();   // The sort() method sorts arrays

/*Looping Array Elements
The safest way to loop through an array, is using a for loop:*/

var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
//You can also use the Array.forEach() function:

var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}





//we can add new index and value to array but if there is no elements upto the  new index. they are undefined.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "Lemon";    // adds a new element (Lemon) to fruits



// methods of array
//we have two methods toString and join
// tostring() method  The JavaScript method toString() converts an array to a string of (comma separated) array values.


var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruits_string=fruits.toString();


//join method

/*The join() method also joins all array elements into a string.

It behaves just like toString(), */

var fruits_string = fruits.join('*');

//popping and pushing

//popping : pop will remove the last element returns the removed item

var cars = ['BMW','BENZ','TESLA','HONDA'];
cars.pop();  //returns HONDA

//pushing : this will add the element into the list at the end

cars.push('HYUNDAI');  //this will return length of the new array 

//shifting elements 

/*Shifting is equivalent to popping, working on the first element instead of the last.

The shift() method removes the first array element and "shifts" all other elements to a lower index.*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // Removes the first element "Banana" from fruits

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

fruits.unshift('Banana');

/*Changing Elements
Array elements are accessed using their index number:*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi"

/*Deleting Elements
Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // Changes the first element in fruits to undefined

/*Splicing an Array
The splice() method can be used to add new items to an array:*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
/*The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:*/

/*Using splice() to Remove Elements
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // Removes the first element of fruits




/*Merging (Concatenating) Arrays
The concat() method creates a new array by merging (concatenating) existing arrays:*/

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys





// slice: this method returns the part of the array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);  // 1 is starting index and 3 is ending index



/*Reversing an Array
The reverse() method reverses the elements in an array.

You can use it to sort an array in descending order:*/


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // First sort the elements of fruits
fruits.reverse();     // Then reverse the order of the elements


