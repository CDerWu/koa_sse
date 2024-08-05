class SSEShell {
    constructor(sseobj) {
        this.sse = sseobj;
    }
    send(data, event) {
        this.sse.send({ data, event });
    }
    sendEnd(retry) {
        this.sse.sendEnd({ retry });
    }
    getSSE() {
        return this.sse;
    }
}

module.exports = SSEShell;