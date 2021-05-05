import isArray from './isArray';
import isObject from './isObject';
import isString from './isString';
function isJSON(value) {
    if (isString(value)) {
        try {
            var json = JSON.parse(value);
            return isArray(json) || isObject(json);
        }
        catch (e) {
        }
    }
    return false;
}
export default isJSON;
//# sourceMappingURL=isJSON.js.map