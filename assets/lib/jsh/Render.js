'use strict';
let E = require('./E').E;
class Render {
    renderText(Text) {

    }
    fileterKeys(data, keystart, keyend) {
        let key = [keystart, keyend];

        let code = data.match(/[\w\s]+(?=\?>)/g);
        return code;
    }
}
exports.Render = Render;