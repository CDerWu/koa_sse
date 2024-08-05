const autorouter = require('koa_autorouter');
const ctrl = require('./index');
const sse = require('koa-sse-stream');

exports[`all_${ctrl.getUrl()}`] = [
    sse(ctrl.getOption()),
    function (ctx) {
        ctrl.callback(ctx.sse, ctx);
        ctx.sse.on('close', (...args) => {
            ctrl.closeConnect(ctx);
        });
    }
];

autorouter.routerAdder(exports);
autorouter.loadRoutes(`${__dirname}/core.js`);