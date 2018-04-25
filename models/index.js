const Promise = require('bluebird');
const mongoose = require('mongoose');
const _ = require('underscore');
const config = require('../utils/config')

mongoose.connection.on('connected', () => {
    console.log(`mongoose default connection connected.`);
});

mongoose.connection.on('error', (err) => {
    console.log(err);
    process.exit(1);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose default connection disconnected');
});

function connect() {
    return new Promise((resolve, reject) => {
        const options = _.clone(config.DB_CONNECTION_OPTS);
        options.server = {
            reconnectTries: Number.MAX_VALUE,
            socketOptions: {
                connectTimeoutMS: 1000
            }
        };
        mongoose.connect(config.MONGO_DB_CONNECTION_STRING, options, (err) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

function ready() {
    if (!ready.promise) {
        ready.promise = connect;
    }
    return ready.promise;
}

function ensureConnected() {
    if (mongoose.Connection.STATES.connected !== mongoose.connection.readyState) {
        throw new Error('Mongodb not connected!');
    }
}

exports.ready = ready;
exports.ensureConnected = ensureConnected;

exports.Register = require('./register');

// promisify
Promise.promisifyAll(mongoose.Model);
Promise.promisifyAll(mongoose.Model.prototype);
Promise.promisifyAll(mongoose.Query.prototype);