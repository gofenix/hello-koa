const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const demoMiddle = require('./middleware/demo-middle');

const app = new Koa();

// 设置路由前缀
const router = new Router({
    prefix: '/api/v1'
});

// 调用自定义的中间件
app.use(demoMiddle.printUrl);

// 使用bodyparser中间件
app.use(bodyParser());

// 使用子路由
router.use(require('./routes').routes());

app.use(router.routes());

app.listen(4000);