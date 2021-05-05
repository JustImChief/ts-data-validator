import isNaN       from './isNaN';
import isUndefined from './isUndefined';

function isDate(value: any): boolean {
  return !isUndefined(value) && isNaN(value.valueOf()) && value instanceof Date;
}

export default isDate;