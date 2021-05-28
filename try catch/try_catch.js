// this will wait for async
async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {

        myReject("not possible");




        myResolve("I love You !!");
    });
    try {
        console.log(await myPromise);

    } catch (e) {
        console.error(e);

    }

}

myDisplay();


//Awaiting a promise to be fulfilled
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
}

f1();

//Thenable objects
async function f2() {
    const thenable = {
        then: function(resolve, _reject) {
            _reject('resolved!')
        }
    };
    try {
        console.log(await thenable); // resolved!

    } catch (e) {
        console.error(e)
    }

}

f2();