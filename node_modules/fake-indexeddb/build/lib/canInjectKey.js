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
// http://w3c.github.io/IndexedDB/#check-that-a-key-could-be-injected-into-a-value
var canInjectKey = function (keyPath, value) {
    if (Array.isArray(keyPath)) {
        // tslint:disable-next-line max-line-length
        throw new Error("The key paths used in this section are always strings and never sequences, since it is not possible to create a object store which has a key generator and also has a key path that is a sequence.");
    }
    var identifiers = keyPath.split(".");
    if (identifiers.length === 0) {
        throw new Error("Assert: identifiers is not empty");
    }
    identifiers.pop();
    try {
        for (var identifiers_1 = __values(identifiers), identifiers_1_1 = identifiers_1.next(); !identifiers_1_1.done; identifiers_1_1 = identifiers_1.next()) {
            var identifier = identifiers_1_1.value;
            if (typeof value !== "object" && !Array.isArray(value)) {
                return false;
            }
            var hop = value.hasOwnProperty(identifier);
            if (!hop) {
                return true;
            }
            value = value[identifier];
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (identifiers_1_1 && !identifiers_1_1.done && (_a = identifiers_1.return)) _a.call(identifiers_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return typeof value === "object" || Array.isArray(value);
    var e_1, _a;
};
exports.default = canInjectKey;
