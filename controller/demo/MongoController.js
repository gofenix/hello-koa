const mongodb = require('mongodb');
const bluebird=require('bluebird');

const url = 'mongodb://localhost:27017/koa-demo';

const mongoAsync=bluebird.promisifyAll(mongodb);

async function f() {
    try {
        const client=await mongoAsync.MongoClient;
        await client.connect(url);
        console.log('ok');
    } catch (err) {
        console.log(err);
    }
}
f();