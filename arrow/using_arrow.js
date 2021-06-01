//normal anonymous function is looks like below 
/*
function(a) {
    console.log(a)
}
b();*/
//example 

array1 = [1, 2, 3, 4, 5, 6, 3, 45, 63, 35, 35, 35, 35, 35, 35]
array_with_numbers_below5 = array1.map(function(ele) {
    if (ele < 5) {
        console.log(ele)

        return ele

    }
})
var i = 0;
while (i < array_with_numbers_below5.length) {
    if (array_with_numbers_below5[i] == undefined) {
        array_with_numbers_below5.splice(i, 1)
    } else {
        i += 1
    }
}




array_with_numbers_below5 = array1.map(ele => {
    if (ele < 5) {
        console.log(ele)

        return ele

    }
});

console.log(array_with_numbers_below5);
