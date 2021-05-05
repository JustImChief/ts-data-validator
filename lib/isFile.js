"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isBlob_1 = require("./isBlob");
var isNumber_1 = require("./isNumber");
var isObject_1 = require("./isObject");
var isString_1 = require("./isString");
function isFile(value) {
    return isBlob_1.default(value) && (isNumber_1.default(value.lastModified) || isObject_1.default(value.lastModifiedDate)) && isString_1.default(value.name);
}
exports.default = isFile;
//# sourceMappingURL=isFile.js.map