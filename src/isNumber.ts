import isNaN from './isNaN';

function isNumber(value: any): boolean {
  return !isNaN(value) && typeof value === 'number';
}

export default isNumber;