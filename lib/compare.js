"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = require("./isArray");
var isJSON_1 = require("./isJSON");
var isNaN_1 = require("./isNaN");
var isObject_1 = require("./isObject");
function compare(firstValue, secondValue) {
    if (typeof firstValue !== typeof secondValue) {
        return false;
    }
    if (isArray_1.default(firstValue) && isArray_1.default(secondValue)) {
        if (firstValue.length !== secondValue.length) {
            return false;
        }
        for (var i = 0; i < firstValue.length; i++) {
            if (!compare(firstValue[i], secondValue[i])) {
                return false;
            }
        }
    }
    else if (isObject_1.default(firstValue) && isObject_1.default(secondValue)) {
        var firstKeys = Object.keys(firstValue), secondKeys = Object.keys(secondValue);
        if (firstKeys.length !== secondKeys.length) {
            return false;
        }
        for (var i = 0; i < firstKeys.length; i++) {
            if (firstKeys[i] !== secondKeys[i]) {
                return false;
            }
            if (!compare(firstValue[firstKeys[i]], secondValue[secondKeys[i]])) {
                return false;
            }
        }
    }
    else if (isJSON_1.default(firstValue) && isJSON_1.default(secondValue)) {
        try {
            var first = JSON.parse(firstValue), second = JSON.parse(secondValue);
            if (!compare(first, second)) {
                return false;
            }
        }
        catch (e) {
            return false;
        }
    }
    else if ((isNaN_1.default(firstValue) && !isNaN_1.default(secondValue)) || (!isNaN_1.default(firstValue) && isNaN_1.default(secondValue))) {
        return false;
    }
    else if (firstValue !== secondValue) {
        return false;
    }
    return true;
}
exports.default = compare;
//# sourceMappingURL=compare.js.map