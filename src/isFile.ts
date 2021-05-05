import isBlob   from './isBlob';
import isNumber from './isNumber';
import isObject from './isObject';
import isString from './isString';

function isFile(value: any): boolean {
  return isBlob(value) && (isNumber(value.lastModified) || isObject(value.lastModifiedDate)) && isString(value.name);
}

export default isFile;
