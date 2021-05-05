import isString from './isString';
function isNotEmptyString(value) {
    return isString(value) && value.replace(/\s/g, '').length > 0;
}
export default isNotEmptyString;
//# sourceMappingURL=isNotEmptyString.js.map