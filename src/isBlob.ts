import isFunction from './isFunction';
import isNumber   from './isNumber';
import isObject   from './isObject';
import isString   from './isString';

function isBlob(value: any): boolean {
  return isObject(value) && isNumber(value.size) && isString(value.type) && isFunction(value.slice);
}

export default isBlob;