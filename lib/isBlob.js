"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = require("./isFunction");
var isNumber_1 = require("./isNumber");
var isObject_1 = require("./isObject");
var isString_1 = require("./isString");
function isBlob(value) {
    return isObject_1.default(value) && isNumber_1.default(value.size) && isString_1.default(value.type) && isFunction_1.default(value.slice);
}
exports.default = isBlob;
//# sourceMappingURL=isBlob.js.map