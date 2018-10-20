"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js");
var fakeIndexedDB_1 = require("./fakeIndexedDB");
var FDBCursor_1 = require("./FDBCursor");
var FDBCursorWithValue_1 = require("./FDBCursorWithValue");
var FDBDatabase_1 = require("./FDBDatabase");
var FDBFactory_1 = require("./FDBFactory");
var FDBIndex_1 = require("./FDBIndex");
var FDBKeyRange_1 = require("./FDBKeyRange");
var FDBObjectStore_1 = require("./FDBObjectStore");
var FDBOpenDBRequest_1 = require("./FDBOpenDBRequest");
var FDBRequest_1 = require("./FDBRequest");
var FDBTransaction_1 = require("./FDBTransaction");
var FDBVersionChangeEvent_1 = require("./FDBVersionChangeEvent");
// http://stackoverflow.com/a/33268326/786644 - works in browser, worker, and Node.js
var globalVar = typeof window !== "undefined" ? window :
    typeof WorkerGlobalScope !== "undefined" ? self :
        typeof global !== "undefined" ? global :
            Function("return this;")();
globalVar.indexedDB = fakeIndexedDB_1.default;
globalVar.IDBCursor = FDBCursor_1.default;
globalVar.IDBCursorWithValue = FDBCursorWithValue_1.default;
globalVar.IDBDatabase = FDBDatabase_1.default;
globalVar.IDBFactory = FDBFactory_1.default;
globalVar.IDBIndex = FDBIndex_1.default;
globalVar.IDBKeyRange = FDBKeyRange_1.default;
globalVar.IDBObjectStore = FDBObjectStore_1.default;
globalVar.IDBOpenDBRequest = FDBOpenDBRequest_1.default;
globalVar.IDBRequest = FDBRequest_1.default;
globalVar.IDBTransaction = FDBTransaction_1.default;
globalVar.IDBVersionChangeEvent = FDBVersionChangeEvent_1.default;
