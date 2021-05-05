import isArray  from './isArray';
import isObject from './isObject';
import isString from './isString';

function isJSON(value: any): boolean {
  if (isString(value)) {
    try {
      const json = JSON.parse(value);

      return isArray(json) || isObject(json);
    } catch (e) {
    }
  }

  return false;
}

export default isJSON;