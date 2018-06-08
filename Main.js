//'use strict';
let Router = require('./src/controllers/Router2').Router;
/*class Main {
    static main() {
        let appSever = new Router();
        appSever.routerTemplates();
    }
}
Main.main();*/
function Main() {};
Main.main = () => {
    let appSever = new Router();
    appSever.routerTemplates();
};
Main.main();