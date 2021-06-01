/* 
Array.prototyp.map()
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
the method will take a function with an argument as values from the array*/
const array = [1, 2, 3, 4, 5];
new_Array = array.map(x => x * x);
console.log(new_Array);

const array2 = ['mango', 'guava', 'apple']
array2_capitalize = array2.map(x => x[0].toUpperCase() + x.slice(1, x.length));
console.log("the first charecter of each element in an array is capitalized as :" + array2_capitalize);

function get(x) {
    return x.toUpperCase();
}

const array3 = ['mango', 'guava', 'apple']
array3_cal_func = array3.map(x => get(x));
console.log("the elements of array are capitalized as : " + array3_cal_func)


let numbers = [1, 2, 8, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})
console.log("roots are " + roots);



//Using map generically
//This example shows how to use map on a String to get an array of bytes in the ASCII encoding representing the character values:

let map = Array.prototype.map
let a = map.call('Hello World', function(x) {
    return x.charCodeAt(0)
})
console.log(a)
    // a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
var string_array = ['1', '2', '3', '4']
interger_array = string_array.map((str) => parseInt(str));
console.log(v)