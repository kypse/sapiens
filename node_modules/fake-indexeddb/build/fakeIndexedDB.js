"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FDBFactory_1 = require("./FDBFactory");
var fakeIndexedDB = new FDBFactory_1.default();
exports.default = fakeIndexedDB;
