const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function  add(a:number, b:number):number{
        return a+b;
}

function subt(a:number, b:number):number{
     return a-b;     
}

function div(a:number, b:number):number{
    return a/b;
}

function mult(a:number, b:number):number{
    return a*b;
}
function mod(a:number, b:number):number{
    return a%b;
}

rl.input1('Enter a number', (input1) => {

    console.log(`: ${input1}`);
  
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