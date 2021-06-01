//Map
//we use map instead of the object 

var map = new Map()
map['first'] = 'first one'
map['second'] = 'second one'
console.log(map);

//here we can keep variables as key values

var first_variable = "this is first variable key";
var second_variable = "this is second variable key ";


/* Using NaN as Map keys
NaN can also be used as a key. Even though every NaN is not equal to itself (NaN !== NaN is true), the following example works because NaNs are indistinguishable from each other:
 */
let myMap = new Map()
myMap.set(NaN, 'not a number')

myMap.get(NaN)
    // "not a number"

let otherNaN = Number('foo')
myMap.get(otherNaN)
    // "not a number"


const map_variable = new Map();
map_variable[first_variable] = 'new first variable value';

//using set method to add values into map
map_variable.set(second_variable, 'new second variable value') // this is shown by arrow mark if you print the value of the map
console.log(map_variable);

//getting the value map of using get method
console.log(map_variable.get(second_variable));

//has method : this will check whether the value is ther in the map or not
console.log(map_variable.has(second_variable));

//delete method : this will delete the value from the map
map_variable.delete(second_variable);
console.log("values of the map after deleting the second variable  : ", map_variable);

// if you try to delete the value which is not map then it will give you false as return

console.log(map_variable.delete(second_variable)); // this will give you false as there is no second variable


//method clear will delete all the values in the object 
map_variable.clear()

//finding the size of the object using .size in map
console.log('after clearing : ' + map_variable.size)
console.log(typeof map_variable)

//defining an object generally
var x = { 'x': 2, 'y': 2 }

//finding length of the object in generally
console.log(Object.keys(x).length)



//Iterating Map with
//for..of
//Maps can be iterated using a
/* for.. of loop: */

let myMap = new Map()
myMap.set(0, 'zero')
myMap.set(1, 'one')

for (let [key, value] of myMap) {
    console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one

for (let key of myMap.keys()) {
    console.log(key)
}
// 0
// 1

for (let value of myMap.values()) {
    console.log(value)
}
// zero
// one

for (let [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one
//Iterating Map with forEach()
//Maps can be iterated using the forEach() method:

myMap.forEach(function(value, key) {
        console.log(key + ' = ' + value)
    })
    // 0 = zero
    // 1 = one
    /* Relation with Array objects */
let kvArray = [
    ['key1', 'value1'],
    ['key2', 'value2']
]

// Use the regular Map constructor to transform a 2D key-value Array into a map
let myMap = new Map(kvArray)

myMap.get('key1') // returns "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap)) // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap])

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap.keys())) // ["key1", "key2"]
    /* Cloning and merging Maps
    Just like Arrays, Maps can be cloned: */

let original = new Map([
    [1, 'one']
])

let clone = new Map(original)

console.log(clone.get(1)) // one
console.log(original === clone) // false (useful for shallow comparison)
    /* Note: Keep in mind that the data itself is not cloned.

    Maps can be merged, maintaining key uniqueness:
     */
let first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
])

let second = new Map([
    [1, 'uno'],
    [2, 'dos']
])

// Merge two maps. The last repeated key wins.
// Spread operator essentially converts a Map to an Array
let merged = new Map([...first, ...second])

console.log(merged.get(1)) // uno
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three


/* Maps can be merged with Arrays, too: */

let first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
])

let second = new Map([
    [1, 'uno'],
    [2, 'dos']
])

// Merge maps with an array. The last repeated key wins.
let merged = new Map([...first, ...second, [1, 'eins']]) // we can pass n number of arguments then last will win if we have same key

console.log(merged.get(1)) // eins
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three
