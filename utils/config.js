// MongoDB settings.
module.exports.MONGO_DB_CONNECTION_STRING = process.env.MONGO_URL || 'mongodb://db-user:db-user-pwd@localhost:27017/your_db_name';

// Database opts.
module.exports.DB_CONNECTION_OPTS = {
    mongos: false,
    auth: {
        authdb: 'admin'
    }
};