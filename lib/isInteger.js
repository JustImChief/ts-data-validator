import isNumber from './isNumber';
function isInteger(value) {
    return isNumber(value) && Number.isInteger(value) && Number.parseInt(value.toString(), 10) === value && Number(value) % 1 === 0;
}
export default isInteger;
//# sourceMappingURL=isInteger.js.map