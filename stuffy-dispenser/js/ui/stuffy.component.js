"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// WAnt to create instance of stuffy and print the contents of the instance
var stuffy_class_1 = require("../model/stuffy.class");
var rl = require('readline-sync');
console.log('Welcome to Stuffy Land!');
var s1 = new stuffy_class_1.Stuffy(1, "giraffe", "blue", "sm", 3);
var s2 = new stuffy_class_1.Stuffy(2, "Octopus", "Hot Pink", "XL", 10);
var s3 = new stuffy_class_1.Stuffy(3, "Wet Koala", "red", "xsm", 5);
var s4 = new stuffy_class_1.Stuffy(4, "Mr Destructoid", "blue", "Med", 7);
var s5 = new stuffy_class_1.Stuffy(5, "Tito", "Vodka", "L", 0);
var stuffies = [s1, s2, s3, s4, s5];
var inp = rl.questionInt("Enter an ID number, please :)  ");
var out;



for (var _i = 0, stuffies_1 = stuffies; _i < stuffies_1.length; _i++) {
    var st = stuffies_1[_i];
    if (st._id === inp) {
        out = st;
        console.log(out.about());
    }
}
if (out == null) {
    console.log('No Stuffies were found with that id :(');
}
console.log('bye');
