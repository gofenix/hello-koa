const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    userId: String,
    age: Number
}, {});

// 设置唯一索引
RegisterSchema.index({
    userId: 1
}, {
    unique: true
});

module.exports = mongoose.model('Register', RegisterSchema);