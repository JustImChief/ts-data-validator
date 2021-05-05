"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isInteger_1 = require("./isInteger");
var isNumber_1 = require("./isNumber");
function isDecimal(value) {
    return isNumber_1.default(value) && !isInteger_1.default(value) && Number.parseInt(value.toString()) !== Number.parseFloat(value.toString());
}
exports.default = isDecimal;
//# sourceMappingURL=isDecimal.js.map