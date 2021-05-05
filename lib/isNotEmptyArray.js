"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = require("./isArray");
function isNotEmptyArray(value) {
    return isArray_1.default(value) && value.length > 0;
}
exports.default = isNotEmptyArray;
//# sourceMappingURL=isNotEmptyArray.js.map