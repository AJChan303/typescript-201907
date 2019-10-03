"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend = /** @class */ (function () {
    function Friend(name, age, email, best) {
        if (name === void 0) { name = ''; }
        if (age === void 0) { age = 0; }
        if (email === void 0) { email = ''; }
        if (best === void 0) { best = 'n'; }
        this.Name = name;
        this.Age = age;
        this.Email = email;
        this.Best = best;
    }
    Friend.prototype.About = function (f) {
        return this.Name + ' ' + this.Age + ' ' + this.Email;
    };
    return Friend;
}());
exports.Friend = Friend;
