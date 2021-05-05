import isString from './isString';

function isNotEmptyString(value: any): boolean {
  return isString(value) && value.replace(/\s/g, '').length > 0;
}

export default isNotEmptyString;