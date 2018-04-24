const router=require('koa-router')();


const demo=require('./api/demo');
router.use('/demo', demo.routes());



module.exports=router;