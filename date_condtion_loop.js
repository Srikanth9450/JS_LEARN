//get methods for date
/*
getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970)
getDay()	Get the weekday as a number (0-6)
Date.now()	Get the time. ECMAScript 5.
*/


var d = new Date();
console.log(d.getHours());
console.log(d.getMinutes());

// I've tried to make a sleep method it is not completed now need to make some changes
function sleeep(sleep_time){
    const date = new Date();
    var value = 0;
    while ((value >= sleep_time)) {
        var current_date = new Date();
        value = current_date.getMilliseconds() - date.getMilliseconds()
    }
    return true

}

/*Set Date Methods
Set Date methods are used for setting a part of a date:

Method	Description
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970) */

var d = new Date();

console.log(d);
d.setDate(24); // this will change currant day to 24
console.log(d); 
var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>"+'\n';
fruits.forEach(myFunction);
text += "</ul>";
function myFunction(value) {
    text += "<li>" + value + "</li>"+'\n';

  }
console.log(text);








//condtional statements
/* 
if
if else
else if
switch

*/
var hour =8;
if (hour < 18) {
    greeting = "Good day";
  }

var d = new Date();
day = d.getHours();
if (day <12) {
    greeting = "Good morning"
    console.log(greeting);
}
else{
    console.log("good afternoon");

}

//JavaScript Switch Statement
//The switch statement is used to perform different actions based on different conditions.
/* Below is the syntax

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}*/

// switch block compare using === means same value with same typw

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
// Break keyword is used to break from the switch case
// default keyword is used to execute dfault block if nothing is matched

switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
  }

 // Common Code Blocks if you don't put the statement for any block then it will share the next block statements
 switch (new Date().getDay()) {
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
//ternary operators: it will check the condition and give any of two outputs according true or false

var age = 20;
var voteable = (age < 18) ? "Too young":"Old enough";

var num =24;
var even = (num%2==0) ? 'even':'odd';
console.log(even);



var x='1';
var y=1;
if (x==y){   // these two values are equal in the js 
    console.log("equal")
}


//loops 
//for loop
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>"+'\n';
}
console.log(text);

var i = 0;
var len = cars.length;
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}
//The For/In Loop
/*

for (key in object) {
  // code block to be executed
}

*/
var numbers = [45, 4, 9, 16, 25];
for (i in numbers){ // indices are stored in the i
    console.log(numbers[i]);
}

var person = {fname:"John", lname:"Doe", age:25};
var text = "";
var x;
for (x in person) { // keys are stored in x 
  console.log(x);
}

/* Array.forEach()
The forEach() method calls a function (a callback function) once for each array element.
*/

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {  // this will give you value and index. first argument is always value and second index third array
  txt = txt + value + "<br>";
  console.log(array);
}
console.log(txt);

//forEach is not worked for object

/* var person = {fname:"John", lname:"Doe", age:25};
person.forEach(myFunction);
var txt = '';
function myFunction(value, index, array) {  // this will give you value and index. first argument is always value and second index third array
  txt = txt + value + "<br>";
  console.log(array);
}
console.log(txt); */

var txt = "";
var numbers = [45, 4, 9, 16, 25];
for (x of numbers){
  console.log(x);

}


//while loop

/*Syntax


while (condition) {
  // code block to be executed
}

*/
 
var x=0;
while (x<10)
{
  console.log(x);
  x+=3;
}


//do while
//one statement will be executed then start checking the condition

var x = 2;
do{
  console.log(x);
  x+=1
}while(x>10); // even this condition fails do will be executed once

//The Break Statement: this will terminate the loop
var x=10
while (true){
  if (x>13){
    break;
  }
  x+=1
  console.log(x);

}
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";

list: {
  text += cars[0] ; 
  text += cars[1] ; 
  break list;
  text += cars[2] ; 
  text += cars[3] ; 
}
// continue statement : this will start the next iteration
var x=1;
while (x<20){
  if (x%3==0){
    x+=1;
    continue;
  }
  if (x%2==0){
  console.log(x)
  }
  x+=1
}

