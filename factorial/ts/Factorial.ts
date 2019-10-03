var readlineSync =  require('readline-sync');
var functions = require('functions.ts');

// function factorial(a:number):number{
//     var total:number = 1;
//     for (let i = 1;i<=a; i++ ){
    
//         total *=i;
//         console.log(total , i)
//     }
//     return total;
// }
console.log('Welcome to the Factorial App!'); 

let m:number = readlineSync.questionInt('Enter a number to factor! ');
console.log('number is ' +m);
let b:number =functions.factorial(m);
console.log('the factorial of '+m+ ' is ' +b);