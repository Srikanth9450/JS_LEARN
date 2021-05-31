// we can write the string using quote or back tick
var string_with_quote = 'This string is written using single quoate'
var string_with_double_quote = "this string is written double quote"
var string_with_backtick = `this string is written using backtick`


//adding the backtick into the string using \
var escape_char = `\``;
var escape_single_quoate = '\'' //same for the double quote also

//doing mathematical operations inside the string
var addTwoValues = "a is 10 b is 20 after adding the value is" + (10 + 20);
var addTwoValues2 = "a is 10 b is 20 after adding the value is" + 10 + 20; //if you don't keep brackets then first 10 is concatenated to string then 20
console.log(addTwoValues)
console.log(addTwoValues2)

var multTwoValues = `a is 10 b is 20 after adding the value is${10+20}`
console.log(multTwoValues)
if (string_with_quote.toLowerCase() == string_with_quote) {
    console.log(true);
} else {
    console.log(false);
}


//ternary operator inside the string
//syntax
//condition? solution1:solution2
console.log(string_with_quote.toLowerCase() == string_with_quote ? true : false)


let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
    let str0 = strings[0]; // "That "
    let str1 = strings[1]; // " is a "
    let str2 = strings[2]; // "."
    console.log(typeof strings)

    let ageStr;
    if (ageExp > 99) {
        ageStr = 'centenarian';
    } else {
        ageStr = 'youngster';
    }

    // We can even return a string built using a template literal
    return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag `That${ person } is a ${ age }.`; // that is passed and become an object inside the function divided into substrings exclude
//the values inside the ${} like that , is a, .

console.log(output);
// That Mike is a youngster.
var x = `that is ${'is a '} monkey`
console.log(x[0])

//using raw this will give you the output with escape charecter
function tag(strings) {
    console.log(strings.raw[0]);
}

tag `string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'

//

console.log(`============================\n==========================================`)

function template(strings, ...keys) {
    console.log(strings + "@" + keys)
    return (function(...values) {
        console.log("values are :" + values + "  type of this variable is " + typeof values)
        let dict = values[values.length - 1] || {};
        console.log(dict)
        let result = [strings[0]];
        keys.forEach(function(key, i) {
            let value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join('');
    });
}


let t1Closure = template `${0}${1}${0}!`; //this won't call the anonymous function 
//let t1Closure = template(["","","","!"],0,1,0);
console.log(t1Closure('Y', 'A')); // this will call anonymous function