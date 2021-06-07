//assert is used to generate an error;

var assert = require('assert');
const { ok } = require('assert');
console.log('enter the number other than zero to find whether the number is divisible by 9');
var x = 1;
//assert(x != 0);
console.log('no error'); //this will be executed if the value of the x is not equal to zero ====> change the x value to get the error
assert(x != 0, 'entered value shouldn\'t be equal to zero');

//assert.deepEqual

var assert = require('assert');
var x = { a: { n: 0 } };
var y = { a: { n: 0 } };
var z = { a: { n: 1 } };
assert.deepEqual(x, y, 'both aren\'t equal'); //OK
assert.deepEqual(x, z, 'both aren\'t equal'); /*AssertionError: { a: { n: 0 } } deepEqual {a: { n: 1 } }*/



//deepStrictEqual ( === )
assert.deepStrictEqual(x, y); //OK
assert.deepStrictEqual(x, z); /*AssertionError: { a: { n: 0 } } deepStrictEqual {a: { n: '0' } }*/


//equal
var assert = require('assert');
assert.equal(50, 70, "My message goes here");


//notDeepEqual()
assert.notDeepEqual(x, y, "they aren equal")
    //notdeepStrictEqual
assert.notDeepStrictEqual(x, y, "they aren equal")

//notEqual()
assert.notEqual(30, 30, 'they are equal')

//ok() this will check that is true


const assert = require("assert")
assert.ok(false, 'this is false but need to be true')


throw 'this is error';