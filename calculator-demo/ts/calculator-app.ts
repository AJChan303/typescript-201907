var readlineSync = require('readline-sync');

console.log('welcome to my calculator');




// let str:string = readlineSync.question("what's your name?");

// let n :number = readlineSync.questionInt('enter a number');

// console.log(n);
// let b:number = n + 1
// console.log(b);     

let n1:number = readlineSync.questionInt('enter the first number ');
let n2: number = readlineSync.questionInt('enter the second number ');

let sum: number = n1+n2;
let mult: number = n1*n2;
let diff: number = n1-n2;
let div: number = n1/n2;
let qt: number = n1%n2;

console.log("sum = "+ sum);
console.log("mult = "+ mult);
console.log("diff = "+ diff);
console.log("div = "+ div);
console.log("qt = "+ qt);







console.log('bye');