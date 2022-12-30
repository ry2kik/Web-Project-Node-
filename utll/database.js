const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'femenine',
    password: '123456'
});

module.exports = pool.promise();