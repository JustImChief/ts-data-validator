"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = require("./isArray");
var isObject_1 = require("./isObject");
var isString_1 = require("./isString");
function isJSON(value) {
    if (isString_1.default(value)) {
        try {
            var json = JSON.parse(value);
            return isArray_1.default(json) || isObject_1.default(json);
        }
        catch (e) {
        }
    }
    return false;
}
exports.default = isJSON;
//# sourceMappingURL=isJSON.js.map