import isInteger from './isInteger';
import isNumber from './isNumber';
function isDecimal(value) {
    return isNumber(value) && !isInteger(value) && Number.parseInt(value.toString()) !== Number.parseFloat(value.toString());
}
export default isDecimal;
//# sourceMappingURL=isDecimal.js.map