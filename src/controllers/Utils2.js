function Utils() {
    this.fs = require('fs');
}
Utils.prototype.readFileUtf8 = (path, callback) => {
    this.fs.readFile(path, 'utf-8', callback);
}
Utils.prototype.readFileSyncUtf8 = (path) => {
    return this.fs.readFileSync(path, 'utf8');
}
exports.Utils = Utils;