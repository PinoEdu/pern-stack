const {Pool} = require("pg");
require("./config");

const pool = new Pool({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'tasksdb'
})

module.exports = pool;