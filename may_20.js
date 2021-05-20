// strings 
// if you want to write the string contains quoate we need to write the opposite quoates inide and outside

// var quote_string =  ' Hi it's 8 o' clock ' // we should n't use same quotes inside and outside

var quote_string =  " Hi it\'s 8 o\' clock "  // now it's valid

// for above thing we can also use escape charecter \ back slash

var quote_string =  ' Hi it\'s 8 o\' clock ' 

// finding length of the string 

quote_string.length;

// convering string to lowercase

var name = 'SRIKANTH'
name.toLowerCase();

// convering string to uppercase

name.toUpperCase();

/*Finding a String in a String
The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:*/
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
// if you give an argument for where to start search we can add like below
var pos = str.indexOf("locate",15);


/*The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:*/
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");

// if you give an argument for where to start search from backside we can add like below
var pos = str.lastIndexOf("locate",15)


// search
var pos = str.search("locate")  // this is used to include regular expressions


/*trim
A string’s trim method returns a copy of the string with beginning and ending whitespace characters removed.*/

var company = "   cumulations technlogies private limited   " ;
company.trim();
/* Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
*/
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);

var res = str.slice(-12, -6);

var res = str.slice(7); // this will start slicing at 7 remaining string will be added 
var res = str.slice(-12);  // this will start slicing at -12 from backside remaining string will be added upto end
console.log(res)


var res = str.substring(7, 13); //this method cannot accept the negative index


var res = str.substr(7,5) ;// here second argument is length of the string
var res = str.substr(-2,4); // we can use negative index
var res = str.substr(1)  //this will give you upto end

//Replacing String Content
// replace can replace only first match
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools"); // it won't change the actual string we can assign to a variable

// we can add regular expression
var new_string = str.replace(/MICROSOFT/i,"cumulations");
console.log(new_string);

// to replace all match cases we just need to put /g
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "cumulations");
console.log(n);

// concat
firstName = 'Gattu';
secondName = 'Srikanth';
var fullName = firstName.concat(" ",secondName);
console.log(fullName);

//JavaScript String Padding
str = "5";
str = str.padStart(4,'*');  // this will add second argument first argument times at the start of string
// result is ****5
console.log(str);


str = "5";
str = str.padEnd(4,'*');  // this will add second argument first argument times at the end of string
// result is ****5
console.log(str);

// EXTRACTING STRING CHARECTERS
/*charAt(position)
charCodeAt(position)*/

var str = "HELLO WORLD";
str.charAt(0);    

var str = "HELLO WORLD";

str.charCodeAt(0);    // this will return charCode of H that is 72


// split : this methods split the string and converts it to list
var alpha =  'a,b,c,d,e,f';
alpha.split(",");
/*Objects
Objects are values that can contain other values. They use keys to name values, which are a lot like variables.*/

//Here’s what a JavaScript object looks like:

var course = {
    name: "GRA 2032",
    start: 8,
    end: 10
};

course.name = "Gre";
console.log(course);
var course = {
    name: "GRA 2032",
    start: 8,
    end: 10
};


// this keyword writing the function inside the object
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName; // if you don't use this keyword inside the function then it shows an error
    }
  };
    console.log(person.fullName());




//date
//creating a new date
/*new Date(year, month, ...)
new Date(year, month, ...) creates a new date object with a specified date and time.

7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order): */
var purchased_time = new Date(2020,07,12);
console.log(purchased_time);
console.log(typeof purchased_time);

// you can give the arguments from 3 to 7
// the first argument is always year and if you two digit number that will become like 19**

var date = new Date(97,03,21);  // this will give you 1997-04-20T18:30:00.000Z
console.log(date);

// getting current time
// if we don't specify any arguments then we will get the current time
var current_time =  new Date();


// giving string as argument 
var d = new Date("October 13, 2014 11:13:00");

var d = new Date();
console.log(d.toUTCString());  // this will give coordinated universal time


console.log(d.toDateString()); // this will give you the date in readable format

console.log(d.toISOString());  // this will give you iso standard format

var d = new Date("2015-03-25");
console.log(d);

var d = new Date("2015-03");
console.log(d);

// parse method converts to milliseconds
var msec = Date.parse("March 21, 2012");
console.log('these are milliseconds converted from the date',msec);

// by using milli seconds we can convert to date format by passing as argument to date function
var d = Date(msec);

console.log(d, msec);


