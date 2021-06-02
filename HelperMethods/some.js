//if any of the element in an array is true in the passed function in the some  

var ages = [3, 10, 18, 20];

function checkAdult(age, ind, array) {
    if (age >= 18) {
        return true
    }
}

console.log(ages.some((age, index, array) => checkAdult));

//check if any element of the array contains even numbers
var numbers = [1, 9, 3, 5, 7];
var result = numbers.some(ele => ele % 2 == 0)
console.log(result)

//Checking whether a value exists in an array
//To mimic the function of the includes() method, this custom function returns true if the element exists in the array:

const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
    return arr.some(function(arrVal) {
        return val === arrVal;
    });
}

checkAvailability(fruits, 'kela'); // false
checkAvailability(fruits, 'banana'); // true
