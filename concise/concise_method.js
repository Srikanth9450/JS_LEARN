var firstName = 'Srikanth'
let obj = {
    firstName: 'Srikanth', // we can directly represents like below
    //  firstName,
    secondName: 'Gattu',
    fullname() {
        return this.firstName + " " + this.secondName
    }
}
var fullname = obj.fullname();
console.log(fullname);




//generators in js
// Using a named property
const obj23 = {
    g: function*() {
        let index = 0
        while (true) {
            yield index++
        }
    }
};

// The same object using shorthand syntax
const obj2 = {
    * g() {
        let index = 0
        while (true) {
            yield index++
        }
    }
};

const it = obj2.g()
console.log(it.next()) //this will give current value with parameter done: false(generator object is not stopped)
console.log(it.next().value)
for (i of it) {
    if (i === 10) {
        break //if you don't keep this. this won't be ended
    }
    console.log(i)
}

// below is not valid as iteration is completed on above example
for (i of it) {
    console.log('printing ' + i)
    if (i === 100) {
        break
    }
    console.log(i)
}
console.log(it.next()) //this will give current value with parameter done: true(generator object is stopped)

console.log(it.next().value) // 0
console.log(it.next().value) // 1
