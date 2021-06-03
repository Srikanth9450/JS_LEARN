let x = 1;

function person() {
    return "this is coming from a.js"
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    personDetails() {
        return `my name is ${this.name} and my age is ${this.age}`
    }
}


export default function(x) {
    console.log(x);
}
module.exports = { x, person, Person }