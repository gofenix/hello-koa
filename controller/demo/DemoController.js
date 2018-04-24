class DemoController {
    async getDemo(ctx) {
        const name = ctx.params.name;
        ctx.response.body = `get response: ${name}`;
    }

    async postDemo(ctx) {
        const name = ctx.request.body.name;
        ctx.response.body = `post response: ${name}`;
    }
}

module.exports = new DemoController();