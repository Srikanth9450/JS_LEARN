//the below has closure property with i  then the results will give all the values 
//below code will print the numbers 0,1,2

for (let i = 0; i < 3; i++) {
    console.log('i : ' + i)
    setTimeout(
        () => {
            console.log(i)
        }, 1000
    );
}

//below code will print only 3 three times
for (var i = 0; i < 3; i++) {
    console.log('i : ' + i)
    setTimeout(
        () => {
            console.log(i)
        }, 1000
    );
}

//to fix above
for (var i = 0; i < 3; i++) {
    var x = (i) => {
        setTimeout(
            () => {
                console.log(i)
            }, 1000
        )
    };
    x(i);
}


//another example for closure
//here we are returning inner function without executing it
function makeFunc() {
    var name = 'Mozilla';

    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

//another example for closure
//here  we are directly returning the function definition
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

console.log(add5); // this will give you type of the function


//another example for closure
var counter = (function() {
    var privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function() {
            changeBy(1);
        },

        decrement: function() {
            changeBy(-1);
        },

        value: function() {
            return privateCounter;
        }
    };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.
