import isInteger from './isInteger';
import isNumber  from './isNumber';

function isDecimal(value: any): boolean {
  return isNumber(value) && !isInteger(value) && Number.parseInt(value.toString()) !== Number.parseFloat(value.toString());
}

export default isDecimal;