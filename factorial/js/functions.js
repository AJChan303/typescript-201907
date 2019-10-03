"use strict";
function factorial(a) {
    var total = 1;
    for (var i = 1; i <= a; i++) {
        total *= i;
        console.log(total, i);
    }
    return total;
}
