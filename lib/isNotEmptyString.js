"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isString_1 = require("./isString");
function isNotEmptyString(value) {
    return isString_1.default(value) && value.replace(/\s/g, '').length > 0;
}
exports.default = isNotEmptyString;
//# sourceMappingURL=isNotEmptyString.js.map