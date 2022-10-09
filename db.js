var knex = require('knex');

var db = knex({
    client: 'mysql',
    connection : {
        host: 'sql10.freesqldatabase.com',
        port: 3306,
        user: 'sql10525231',
        password : 'wu4hqrvtJR',
        database : 'sql10525231'
    }
});

module.exports = db;