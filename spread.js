//spread syntax(...)

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];
console.log(numberStore);
console.log(...numberStore); // this will split the items of the 
console.log([...numberStore]); //this will convert into an array 
console.log({...numberStore }); // this will convert into object with key value pair
/*Spread in function calls
Replace apply()
It is common to use Function.prototype.apply() in cases where you want to use the elements of an array as arguments to a function.*/

function myFunction(x, y, z) {}
let args = [0, 1, 2];
myFunction.apply(null, args);

// inplace of apply we can use spread
function myFunction_new(x, y, z) {}
let args_new = [0, 1, 2];
myFunction_new(...args_new);

let name = "srikanth"
console.log(...name); //this will split each charecter 

//changing the first and last charecter to uppercase in a string 

let new_str = 'new world';

function making_f_l_upper(array) {
    array[0] = array[0].toUpperCase();
    return array;


}
var new_array = making_f_l_upper([...new_str])
console.log(...new_array);
