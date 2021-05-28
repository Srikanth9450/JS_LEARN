//example for async and callback

setTimeout(() => { print_func('how are you?') }, 3000); //this function is called back after 3 seconds
setTimeout(() => { print_func('hii') }, 1000); // this function is called back after 1 seconds
console.log('hey srikanth')

function print_func(val) {
    console.log(val);
}