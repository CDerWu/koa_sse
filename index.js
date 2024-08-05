const shell = require('./sseshell.js');
let sseUrl = "connect";

let callback = function () {
    console.log(`[SSE] You should call "setCallBack"...`);
};

let closeConnect = function () {
    console.log(`[SSE] You should call "closeConnect"...`);
};

let option = {
    maxClients: 5000,
    pingInterval: 30000
};

exports.setSSEurl = function (urlstr) {
    sseUrl = urlstr;
};

exports.setOption = function (obj) {
    option = obj;
};

exports.setCallBack = function (func) {
    callback = func;
};

exports.setCloseConnect = function (func) {
    closeConnect = func;
};

exports.activate = function () {
    require('./core.js');
};

exports.getUrl = function () {
    return sseUrl;
};

exports.getOption = function () {
    return option;
};

exports.callback = function (sseObj, ctx) {
    return callback(new shell(sseObj), ctx);
};

exports.closeConnect = function (ctx) {
    return closeConnect(ctx);
};