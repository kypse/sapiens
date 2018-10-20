"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FDBKeyRange_1 = require("../FDBKeyRange");
var errors_1 = require("./errors");
var valueToKey_1 = require("./valueToKey");
// http://w3c.github.io/IndexedDB/#convert-a-value-to-a-key-range
var valueToKeyRange = function (value, nullDisallowedFlag) {
    if (nullDisallowedFlag === void 0) { nullDisallowedFlag = false; }
    if (value instanceof FDBKeyRange_1.default) {
        return value;
    }
    if (value === null || value === undefined) {
        if (nullDisallowedFlag) {
            throw new errors_1.DataError();
        }
        return new FDBKeyRange_1.default(undefined, undefined, false, false);
    }
    var key = valueToKey_1.default(value);
    return FDBKeyRange_1.default.only(key);
};
exports.default = valueToKeyRange;
