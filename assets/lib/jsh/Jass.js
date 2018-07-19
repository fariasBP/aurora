'use strict';
let Render = require('./Render').Render;
class Jass extends Render{
    renderAsinc(data) {
        var x = this.fileterKeys(data, '{{', '}}');
        return x;
    }
    render(data, callback) {

    }
}
exports.Jass = Jass;