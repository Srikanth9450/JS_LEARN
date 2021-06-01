const arraySparse = [1, 3, , 7]
let numCallbackRuns = 0

arraySparse.forEach(function(element) {
    console.log(element)
    numCallbackRuns++
})

console.log("numCallbackRuns: ", numCallbackRuns)

// 1
// 3
// 7
// numCallbackRuns: 3
// comment: as you can see the missing value between 3 and 7 didn't invoke callback function.

const items = ['item1', 'item2', 'item3']
const copyItems = []

// before
for (let i = 0; i < items.length; i++) {
    copyItems.push(items[i])
}

// after
items.forEach(function(item) {
    copyItems.push(item)
})


function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element)
}

// Notice that index 2 is skipped, since there is no item at
// that position in the array...
[2, 5, , 9].forEach(logArrayElements)

let words = ['one', 'two', 'three', 'four']
words.forEach(function(word) {
        console.log(word)
        if (word === 'two') {
            words.shift() //'one' will delete from array
        }
    }) // one // two // four

console.log(words); //['two', 'three', 'four']


//Flatten an array
//The following example is only here for learning purpose. If you want to flatten an array using built-in methods you can use Array.prototype.flat().

function flatten(arr) {
    const result = []

    arr.forEach(function(i) {
        if (Array.isArray(i)) {
            result.push(...flatten(i))
        } else {
            result.push(i)
        }
    })

    return result
}

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]

flatten(nested) // [1, 2, 3, 4, 5, 6, 7, 8, 9]