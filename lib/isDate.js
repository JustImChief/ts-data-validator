"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNaN_1 = require("./isNaN");
var isUndefined_1 = require("./isUndefined");
function isDate(value) {
    return !isUndefined_1.default(value) && isNaN_1.default(value.valueOf()) && value instanceof Date;
}
exports.default = isDate;
//# sourceMappingURL=isDate.js.map