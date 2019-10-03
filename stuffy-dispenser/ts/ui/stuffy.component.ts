// WAnt to create instance of stuffy and print the contents of the instance
import {Stuffy} from "../model/stuffy.class";
let rl = require('readline-sync')
console.log('Welcome to Stuffy Land!');
let s1:Stuffy = new Stuffy(1, "giraffe", "blue", "sm", 3);
let s2:Stuffy = new Stuffy(2, "Octopus","Hot Pink","XL",10);
let s3:Stuffy = new Stuffy(3, "Wet Koala", "red", "xsm",5);
let s4:Stuffy = new Stuffy(4, "Mr Destructoid","blue","Med",7);
let s5:Stuffy = new Stuffy(5,"Tito","Vodka","L",0);
let stuffies: Array<Stuffy>  = [s1, s2, s3, s4,s5]


// simple for
// for (let i:number = 0;i<stuffies.length; i++)
// {
    //     let stuffy:Stuffy = stuffies[i];
    //     console.log('')
    // }
    //JS Foreach function
    // stuffies.forEach(s=>{
        //     if (s._id ==inp){
            //         console.log(s.about());
            //     }
            // });
            
    let inp :number = rl.questionInt("Enter an ID number, please :)  ");
    // for (let s  in stuffies){
    //     if (stuffies[s]._id == inp){
    //         code follows
    //     }
    // }
let out: Stuffy;

function getStuffy(inp:number){
    for(var st of stuffies){
        if(st._id === inp){
            out =st;
            console.log(out.about());
            
        
        }
    }
    if(out == null ){
        console.log('No Stuffies were found with that id :(')
    }
    
}
console.log('bye');