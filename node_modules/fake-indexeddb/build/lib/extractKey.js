"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var valueToKey_1 = require("./valueToKey");
// http://www.w3.org/TR/2015/REC-IndexedDB-20150108/#dfn-steps-for-extracting-a-key-from-a-value-using-a-key-path
var extractKey = function (keyPath, value) {
    if (Array.isArray(keyPath)) {
        var result = [];
        try {
            for (var keyPath_1 = __values(keyPath), keyPath_1_1 = keyPath_1.next(); !keyPath_1_1.done; keyPath_1_1 = keyPath_1.next()) {
                var item = keyPath_1_1.value;
                // This doesn't make sense to me based on the spec, but it is needed to pass the W3C KeyPath tests (see same
                // comment in validateKeyPath)
                if (item !== undefined && item !== null && typeof item !== "string" && item.toString) {
                    item = item.toString();
                }
                result.push(valueToKey_1.default(extractKey(item, value)));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keyPath_1_1 && !keyPath_1_1.done && (_a = keyPath_1.return)) _a.call(keyPath_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    }
    if (keyPath === "") {
        return value;
    }
    var remainingKeyPath = keyPath;
    var object = value;
    while (remainingKeyPath !== null) {
        var identifier = void 0;
        var i = remainingKeyPath.indexOf(".");
        if (i >= 0) {
            identifier = remainingKeyPath.slice(0, i);
            remainingKeyPath = remainingKeyPath.slice(i + 1);
        }
        else {
            identifier = remainingKeyPath;
            remainingKeyPath = null;
        }
        if (!object.hasOwnProperty(identifier)) {
            return;
        }
        object = object[identifier];
    }
    return object;
    var e_1, _a;
};
exports.default = extractKey;
