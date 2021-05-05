"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNaN_1 = require("./isNaN");
function isNumber(value) {
    return !isNaN_1.default(value) && typeof value === 'number';
}
exports.default = isNumber;
//# sourceMappingURL=isNumber.js.map