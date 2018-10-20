"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("./errors");
// https://w3c.github.io/IndexedDB/#convert-a-value-to-a-input
var valueToKey = function (input, seen) {
    if (typeof input === "number") {
        if (isNaN(input)) {
            throw new errors_1.DataError();
        }
        return input;
    }
    else if (input instanceof Date) {
        var ms = input.valueOf();
        if (isNaN(ms)) {
            throw new errors_1.DataError();
        }
        return new Date(ms);
    }
    else if (typeof input === "string") {
        return input;
    }
    else if ((input instanceof ArrayBuffer) ||
        (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView && ArrayBuffer.isView(input))) {
        if (input instanceof ArrayBuffer) {
            return new Uint8Array(input).buffer;
        }
        return new Uint8Array(input.buffer).buffer;
    }
    else if (Array.isArray(input)) {
        if (seen === undefined) {
            seen = new Set();
        }
        else if (seen.has(input)) {
            throw new errors_1.DataError();
        }
        seen.add(input);
        var keys = [];
        for (var i = 0; i < input.length; i++) {
            var hop = input.hasOwnProperty(i);
            if (!hop) {
                throw new errors_1.DataError();
            }
            var entry = input[i];
            var key = valueToKey(entry, seen);
            keys.push(key);
        }
        return keys;
    }
    else {
        throw new errors_1.DataError();
    }
};
exports.default = valueToKey;
