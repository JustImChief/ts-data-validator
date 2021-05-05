"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUndefined = exports.isString = exports.isRegExp = exports.isObject = exports.isNumber = exports.isNull = exports.isNotEmptyString = exports.isNotEmptyObject = exports.isNotEmptyArray = exports.isNaN = exports.isJSON = exports.isInteger = exports.isFunction = exports.isFormData = exports.isFile = exports.isEvent = exports.isDecimal = exports.isDate = exports.isBoolean = exports.isBlob = exports.isArray = exports.compare = void 0;
var compare_1 = require("./compare");
Object.defineProperty(exports, "compare", { enumerable: true, get: function () { return compare_1.default; } });
var isArray_1 = require("./isArray");
Object.defineProperty(exports, "isArray", { enumerable: true, get: function () { return isArray_1.default; } });
var isBlob_1 = require("./isBlob");
Object.defineProperty(exports, "isBlob", { enumerable: true, get: function () { return isBlob_1.default; } });
var isBoolean_1 = require("./isBoolean");
Object.defineProperty(exports, "isBoolean", { enumerable: true, get: function () { return isBoolean_1.default; } });
var isDate_1 = require("./isDate");
Object.defineProperty(exports, "isDate", { enumerable: true, get: function () { return isDate_1.default; } });
var isDecimal_1 = require("./isDecimal");
Object.defineProperty(exports, "isDecimal", { enumerable: true, get: function () { return isDecimal_1.default; } });
var isEvent_1 = require("./isEvent");
Object.defineProperty(exports, "isEvent", { enumerable: true, get: function () { return isEvent_1.default; } });
var isFile_1 = require("./isFile");
Object.defineProperty(exports, "isFile", { enumerable: true, get: function () { return isFile_1.default; } });
var isFormData_1 = require("./isFormData");
Object.defineProperty(exports, "isFormData", { enumerable: true, get: function () { return isFormData_1.default; } });
var isFunction_1 = require("./isFunction");
Object.defineProperty(exports, "isFunction", { enumerable: true, get: function () { return isFunction_1.default; } });
var isInteger_1 = require("./isInteger");
Object.defineProperty(exports, "isInteger", { enumerable: true, get: function () { return isInteger_1.default; } });
var isJSON_1 = require("./isJSON");
Object.defineProperty(exports, "isJSON", { enumerable: true, get: function () { return isJSON_1.default; } });
var isNaN_1 = require("./isNaN");
Object.defineProperty(exports, "isNaN", { enumerable: true, get: function () { return isNaN_1.default; } });
var isNotEmptyArray_1 = require("./isNotEmptyArray");
Object.defineProperty(exports, "isNotEmptyArray", { enumerable: true, get: function () { return isNotEmptyArray_1.default; } });
var isNotEmptyObject_1 = require("./isNotEmptyObject");
Object.defineProperty(exports, "isNotEmptyObject", { enumerable: true, get: function () { return isNotEmptyObject_1.default; } });
var isNotEmptyString_1 = require("./isNotEmptyString");
Object.defineProperty(exports, "isNotEmptyString", { enumerable: true, get: function () { return isNotEmptyString_1.default; } });
var isNull_1 = require("./isNull");
Object.defineProperty(exports, "isNull", { enumerable: true, get: function () { return isNull_1.default; } });
var isNumber_1 = require("./isNumber");
Object.defineProperty(exports, "isNumber", { enumerable: true, get: function () { return isNumber_1.default; } });
var isObject_1 = require("./isObject");
Object.defineProperty(exports, "isObject", { enumerable: true, get: function () { return isObject_1.default; } });
var isRegExp_1 = require("./isRegExp");
Object.defineProperty(exports, "isRegExp", { enumerable: true, get: function () { return isRegExp_1.default; } });
var isString_1 = require("./isString");
Object.defineProperty(exports, "isString", { enumerable: true, get: function () { return isString_1.default; } });
var isUndefined_1 = require("./isUndefined");
Object.defineProperty(exports, "isUndefined", { enumerable: true, get: function () { return isUndefined_1.default; } });
var DataValidator = {
    compare: compare_1.default,
    isArray: isArray_1.default,
    isBlob: isBlob_1.default,
    isBoolean: isBoolean_1.default,
    isDate: isDate_1.default,
    isDecimal: isDecimal_1.default,
    isEvent: isEvent_1.default,
    isFile: isFile_1.default,
    isFormData: isFormData_1.default,
    isFunction: isFunction_1.default,
    isInteger: isInteger_1.default,
    isJSON: isJSON_1.default,
    isNaN: isNaN_1.default,
    isNotEmptyArray: isNotEmptyArray_1.default,
    isNotEmptyObject: isNotEmptyObject_1.default,
    isNotEmptyString: isNotEmptyString_1.default,
    isNull: isNull_1.default,
    isNumber: isNumber_1.default,
    isObject: isObject_1.default,
    isRegExp: isRegExp_1.default,
    isString: isString_1.default,
    isUndefined: isUndefined_1.default,
};
exports.default = DataValidator;
//# sourceMappingURL=index.js.map