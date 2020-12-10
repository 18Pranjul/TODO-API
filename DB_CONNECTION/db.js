const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "development",
    host: "localhost",
    port: 5432,
    database: "TODO"
});

module.exports = pool;