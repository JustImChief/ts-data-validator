"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = require("./isArray");
var isFunction_1 = require("./isFunction");
var isNull_1 = require("./isNull");
function isObject(value) {
    return typeof value === 'object' && !isArray_1.default(value) && !isNull_1.default(value) && !isFunction_1.default(value);
}
exports.default = isObject;
//# sourceMappingURL=isObject.js.map