const _ = require('underscore');
const models = require('../../models');

class MongoController {
    ready() {
        return models.ready();
    }

    async addRegister(userId, age) {
        const registerDao = new models.Register({
            userId,
            age
        });

        return registerDao.saveAsync();
    }

    async findOne(userId, age) {
        return await models.Register.findOneAsync({
            userId,
            age
        })
    }
}