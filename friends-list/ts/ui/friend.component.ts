import {Friend} from '../model/friend.class'
import { getMaxListeners } from 'cluster';
import { isAbsolute } from 'path';
let rl = require('readline-sync');

console.log('Welcome to your friends list!');
let s1 = new Friend( 'Jesse', 33, 'J@gmail.com');
let s2 = new Friend( 'Titus', 18, 'T@gmail.com');
let s3 = new Friend( 'Maggie', 28, 'M@gmail.com');
let s4 = new Friend( 'Brailee', 23, 'B@gmail.com');
let s5 = new Friend( 'Glenn', 32, 'G@gmail.com');
let s6 = new Friend( 'Marrianne', 27, 'MA@gmail.com');
let s7 = new Friend('Briana', 28, 'Br@Gmail.com')

let friends:Array<Friend> = [s1,s2,s3,s4,s5,s6,s7];
console.log('Name  Age  Email')
for(let f of friends){
   console.log( f.About());
}

console.log('Bye!');