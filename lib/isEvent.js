"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEvent(value) {
    return !!(value && value.stopPropagation && value.preventDefault);
}
exports.default = isEvent;
//# sourceMappingURL=isEvent.js.map