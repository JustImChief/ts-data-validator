"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNumber_1 = require("./isNumber");
function isInteger(value) {
    return isNumber_1.default(value) && Number.isInteger(value) && Number.parseInt(value.toString(), 10) === value && Number(value) % 1 === 0;
}
exports.default = isInteger;
//# sourceMappingURL=isInteger.js.map