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