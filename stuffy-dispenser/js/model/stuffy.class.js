"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stuffy = /** @class */ (function () {
    function Stuffy(i, t, c, s, l) {
        if (i === void 0) { i = 0; }
        if (t === void 0) { t = ''; }
        if (c === void 0) { c = ''; }
        if (s === void 0) { s = ''; }
        if (l === void 0) { l = 0; }
        this._id = i;
        this.color = c;
        this.type = t;
        this.limbs = l;
        this.size = s;
    }
    Object.defineProperty(Stuffy.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Stuffy.prototype.about = function () {
        return 'Stuff: id = ' + this._id + 'Type = ' + this.type + ' Color = ' + this.color + ' Size = ' + this.size + ' Limbs = ' + this.limbs;
    };
    return Stuffy;
}());
exports.Stuffy = Stuffy;
