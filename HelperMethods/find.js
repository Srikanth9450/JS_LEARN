// find: this will work like this will take the each element and check the condition if that is true then will get that element

const array1 = [5, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

//Find an object in an array by one of its properties
const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

function isCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }


//Using arrow function and destructuring
const inventory2 = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

const result = inventory2.find(({ name }) => name === 'cherries');

console.log(result) // { name: 'cherries', quantity: 5 }


//Find a prime number in an array
//The following example finds an element in the array that is a prime number (or returns undefined if there is no prime number):

function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5