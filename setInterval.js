let array = ['hello', 'hi', 'hey', 'hii', 'hiii']
var i = 0;
x = setInterval(myFunc, 2000, 'hii'); // we must assign to a variable to stop the iteration

function myFunc(val) {
    if (array[i] == 'hii') {
        clearInterval(x);

    } else {
        console.log(array[i]);

    }
    i++;
}
