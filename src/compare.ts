import isArray  from './isArray';
import isJSON   from './isJSON';
import isNaN    from './isNaN';
import isObject from './isObject';

function compare(firstValue: any, secondValue: any): boolean {
  if (typeof firstValue !== typeof secondValue) {
    return false;
  }

  if (isArray(firstValue) && isArray(secondValue)) {
    if (firstValue.length !== secondValue.length) {
      return false;
    }

    for (let i = 0; i < firstValue.length; i++) {
      if (!compare(firstValue[i], secondValue[i])) {
        return false;
      }
    }
  } else if (isObject(firstValue) && isObject(secondValue)) {
    const firstKeys = Object.keys(firstValue), secondKeys = Object.keys(secondValue);

    if (firstKeys.length !== secondKeys.length) {
      return false;
    }

    for (let i = 0; i < firstKeys.length; i++) {
      if (firstKeys[i] !== secondKeys[i]) {
        return false;
      }

      if (!compare(firstValue[firstKeys[i]], secondValue[secondKeys[i]])) {
        return false;
      }
    }
  } else if (isJSON(firstValue) && isJSON(secondValue)) {
    try {
      const first = JSON.parse(firstValue), second = JSON.parse(secondValue);

      if (!compare(first, second)) {
        return false;
      }
    } catch (e) {
      return false;
    }
  } else if ((isNaN(firstValue) && !isNaN(secondValue)) || (!isNaN(firstValue) && isNaN(secondValue))) {
    return false;
  } else if (firstValue !== secondValue) {
    return false;
  }

  return true;
}

export default compare;