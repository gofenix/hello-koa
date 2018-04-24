const router=require('koa-router')();
const demoCtrl = require('../../controller/demo/DemoController');

router
    .get('/hello/:name', demoCtrl.getDemo)
    .post('/world', demoCtrl.postDemo);

module.exports=router;