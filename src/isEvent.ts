function isEvent(value: any): boolean {
  return !!(value && value.stopPropagation && value.preventDefault);
}

export default isEvent;