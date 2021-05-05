import isBlob from './isBlob';
import isNumber from './isNumber';
import isObject from './isObject';
import isString from './isString';
function isFile(value) {
    return isBlob(value) && (isNumber(value.lastModified) || isObject(value.lastModifiedDate)) && isString(value.name);
}
export default isFile;
//# sourceMappingURL=isFile.js.map