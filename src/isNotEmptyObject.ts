import isObject from './isObject';

function isNotEmptyObject(value: any): boolean {
  return isObject(value) && Object.keys(value).length > 0;
}

export default isNotEmptyObject;