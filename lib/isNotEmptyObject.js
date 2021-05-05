"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isObject_1 = require("./isObject");
function isNotEmptyObject(value) {
    return isObject_1.default(value) && Object.keys(value).length > 0;
}
exports.default = isNotEmptyObject;
//# sourceMappingURL=isNotEmptyObject.js.map