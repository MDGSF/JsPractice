const fs = require('fs');
const path = require('path');

function addMapping(router, mapping) {

}

function addControllers(router, dir) {
    var files = fs.readdirSync(path.join(__dirname, dir));
    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    });

    for (var f of js_files) {
        console.log(`process controller: ${f}...`);
        let mapping = require(path.join(__dirname, dir, f));
        addMapping(router, mapping);
    }
}

module.exports = function (dir) {
    let controllers_dir = dir || 'controllers',
    router = require('koa-router')();
    addControllers(router, controllers_dir);
    return router.routes();
}
