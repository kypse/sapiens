"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var realisticStructuredClone = require("realistic-structured-clone"); // tslint:disable-line no-var-requires
var errors_1 = require("./errors");
var structuredClone = function (input) {
    try {
        return realisticStructuredClone(input);
    }
    catch (err) {
        throw new errors_1.DataCloneError();
    }
};
exports.default = structuredClone;
