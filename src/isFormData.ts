import FormData from 'form-data';

function isFormData(value: any): boolean {
  return value instanceof FormData;
}

export default isFormData;