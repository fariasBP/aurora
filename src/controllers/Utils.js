'use strict';
class Utils {
    constructor() {
        this.fs = require('fs');
    }
    readFileUtf8(path, callback) {
        this.fs.readFile(path, 'utf-8', callback);
    }
    readFileSyncUtf8(path) {
        return this.fs.readFileSync(path, 'utf8');
    }
    include(path) {
        return 'hola';
    }
}
exports.Utils = Utils;