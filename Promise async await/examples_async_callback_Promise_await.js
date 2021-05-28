/* //callback
const x = [1, 2, 3]

x.push(4);
console.log(x);
var output = '';

function first_call() {
    setTimeout(() => {
        x.forEach(i => {

            output += ` <li>${i}</li> \n `
        })
        console.log(output)

    }, 1000)



};

function second_call(y, callback) {
    setTimeout(() => {
        x.push(y);
        callback();

    }, 3000)

};
second_call(5, first_call);
 */

//Promises
// Promises will give take two parameters resolve and reject if it's reject it will throw an error
//that will collect after returning from the function then dependency function will be called using method
// if there is error we can catch using the catch method after then method

/* const x = [1, 2, 3]

x.push(4);
console.log(x);
var output = '';

function first_call() {
    setTimeout(() => {
        x.forEach(i => {

            output += ` <li>${i}</li> \n `
        })
        console.log(output)

    }, 1000)



};

function second_call(y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            x.push(y);

            const err = false;
            if (!err) {
                reject("error occur")
            } else {
                resolve();

            }

        }, 3000)
    })

};
second_call(5).then(first_call).catch((err) => console.log(err));


//Promises all
const promise1 = Promise.resolve("hello world")
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(
        resolve, 2000, 'goodbye')
})
Promise.all([promise1, promise2, promise3]).then(values => console.log(values)) */




//async function

const x = [1, 2, 3]

x.push(4);
console.log(x);
var output = '';

function first_call() {
    setTimeout(() => {
        x.forEach(i => {

            output += ` <li>${i}</li> \n `
        })
        console.log(output)

    }, 1000)



};

function second_call(y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            x.push(y);

            const err = false;
            if (err) {
                reject("error occur")
            } else {
                resolve();

            }

        }, 3000)
    })

};

async function fetchdata() {
    const result = await second_call(5).then(first_call).catch((err) => console.log(err));
    console.log('completed')
}
fetchdata();