import isObject from './isObject';
function isNotEmptyObject(value) {
    return isObject(value) && Object.keys(value).length > 0;
}
export default isNotEmptyObject;
//# sourceMappingURL=isNotEmptyObject.js.map