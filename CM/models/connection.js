var pg = require('pg');

const connectionString = "postgres://postgres:postgres@localhost:5432/mt"

const Pool = pg.Pool
const pool = new Pool({
    connectionString,
    max: 20,
    ssl: {
        require: true, 
        rejectUnauthorized: false
    }
    
})

module.exports = pool;