import isArray from './isArray';

function isNotEmptyArray(value: any): boolean {
  return isArray(value) && value.length > 0;
}

export default isNotEmptyArray;