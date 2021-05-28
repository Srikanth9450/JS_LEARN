 const myArray = ['zero', 'one', 'two'];
 myArray.myMethod = function(sProperty) {
     console.log(arguments.length > 0 ? this[sProperty] : this); // this keyword will give entire array object
     //this[sPropery] in this we can give index of array and method(as string) of array
 };

 myArray.myMethod(); // prints "zero,one,two"
 myArray.myMethod(1); // prints "one"
 myArray.METHOD = function() {
     console.log(this["myMethod"])
 }
 myArray.METHOD();

 setTimeout(myArray.myMethod, 1.0 * 1000); // prints "[object Window]" after 1 second
 setTimeout(myArray.myMethod, 1.5 * 1000, '1'); // prints "undefined" after 1.5 seconds
 // in the above two lines there is no option to pass argument

 //wrapper
 //instead of passing an array directly we just need to pass the anonymous function
 console.log("using wrapper");
 setTimeout(function() {
     console.log(myArray.myMethod(2))
 }, 2.0 * 1000);

 setTimeout(() => { myArray.myMethod() }, 1.0 * 1000); // prints "zero,one,two" after 2 seconds
 setTimeout(() => { myArray.myMethod('1') }, 2.5 * 1000); // prints "one" after 2.5 seconds


 //use bind() argument is array
 const myNewArray = [1, 2, 3];
 const fun = function() {
     console.log('hii you called me')
 }
 const func_bind = (function(property) {
     console.log(arguments.length > 0 ? this[property] : this);
 }).bind(myNewArray);
 console.log('using bind')
 setTimeout(func_bind, 1000, 1); // first argument is function name we are calling second argument is time  interval third argument arguments passing to the function

 setTimeout(console.log, 500, 'Hello World!'); // we shouldn't pass string as arguments directly => this will throw an error
 setTimeout(function() {
     console.log("console.log('Hello World!');")
 }, 1000)

 function foo() {
     console.log('foo has been called');
 }
 setTimeout(foo, 0);
 console.log('After setTimeout');

 //setting timeout and cancelling before it happens
 let timeoutID;

 function delayedAlert() {
     timeoutID = setTimeout(console.log, 2 * 1000, 'That was really slow!');
 }

 function clearAlert() {
     clearTimeout(timeoutID);
 }
 delayedAlert();
 console.log('after delay')