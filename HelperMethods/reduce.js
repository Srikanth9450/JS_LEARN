//Array.prototype.reduce()
//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5)); // here 5 is initial accumulator value
// expected output: 15





const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1

[1, 100].reduce(getMax); // 100

// callback is not invoked
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

//[].reduce(getMax); // TypeError

[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue
})

//Sum all the values of an array
let sum = [0, 1, 2, 3].reduce(function(accumulator, currentValue) {
        return accumulator + currentValue
    }, 0)
    // sum is 6 
    //Alternatively written with an arrow function:

let total = [0, 1, 2, 3].reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0

)
console.log(total)

/*Sum of values in an object array
To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.
*/
let initialValue = 0
let sum_di = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.x
    }, initialValue) // here initial value is initial accumulator value

console.log("sum is " + sum_di) // logs 6


//Flatten an array of arrays
let flattened = [
        [0, 1],
        [2, 3],
        [4, 5]
    ].reduce(
        function(accumulator, currentValue) {
            return accumulator.concat(currentValue)
        }, []
    )
    // flattened is [0, 1, 2, 3, 4, 5]

/* Array.prototype.every()
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

 */
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true