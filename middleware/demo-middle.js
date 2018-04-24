/**
 * 在这里可以写自定义的中间件
 */
class DemoMiddleWare {
    async printUrl(ctx, next) {
        console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
        await next(); // 调用下一个middleware
    }
}

module.exports=new DemoMiddleWare();