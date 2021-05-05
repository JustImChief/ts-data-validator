import isArray from './isArray';
import isFunction from './isFunction';
import isNull from './isNull';
function isObject(value) {
    return typeof value === 'object' && !isArray(value) && !isNull(value) && !isFunction(value);
}
export default isObject;
//# sourceMappingURL=isObject.js.map