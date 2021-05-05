import isNaN from './isNaN';
import isUndefined from './isUndefined';
function isDate(value) {
    return !isUndefined(value) && isNaN(value.valueOf()) && value instanceof Date;
}
export default isDate;
//# sourceMappingURL=isDate.js.map