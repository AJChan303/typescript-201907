"use strict";
function factorial(a) {
    var total = 1;
    for (var i = 1; i <= a; i++) {
        total = total * i;
        console.log(total, i);
    }
    return total;
}
console.log('Welcome to the Factorial App!');
var m = 7;
console.log('number is ' + m);
var b = factorial(m);
console.log('the factorial of ' + m + ' is ' + b);
