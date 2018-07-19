'use strict';
let Router = require('./src/controllers/Router').Router;
class Main {
    static main() {
        let appSever = new Router();
        appSever.routerTemplates();
    }
}
Main.main();
