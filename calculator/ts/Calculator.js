"use strict";
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function add(a, b) {
    return a + b;
}
function subt(a, b) {
    return a - b;
}
function div(a, b) {
    return a / b;
}
function mult(a, b) {
    return a * b;
}
function mod(a, b) {
    return a % b;
}
rl.input1('Enter a number', function (input1) {
    console.log(": " + input1);
    rl.close();
});
// switch(input2){
//     case +:{
//         add(input1 ,input3);
//         break;
//     }
//     case -:{
//         subt(input1, input3);
//         break;
//     }
//     case /:{
//         div(input1, input3);
//         break;
//     }
//     case *:{
//        mult( input1, input3);
//        break;
//     }
// }
