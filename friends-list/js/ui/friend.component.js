"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friend_class_1 = require("../model/friend.class");
var rl = require('readline-sync');
console.log('Welcome to your friends list!');
var s1 = new friend_class_1.Friend('Jesse', 33, 'J@gmail.com');
var s2 = new friend_class_1.Friend('Titus', 18, 'T@gmail.com');
var s3 = new friend_class_1.Friend('Maggie', 28, 'M@gmail.com');
var s4 = new friend_class_1.Friend('Brailee', 23, 'B@gmail.com');
var s5 = new friend_class_1.Friend('Glenn', 32, 'G@gmail.com');
var s6 = new friend_class_1.Friend('Marrianne', 27, 'MA@gmail.com');
var s7 = new friend_class_1.Friend('Briana', 28, 'Br@Gmail.com');
var friends = [s1, s2, s3, s4, s5, s6, s7];
console.log('Name  Age  Email');
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var f = friends_1[_i];
    console.log(f.About());
}
console.log('Bye!');
