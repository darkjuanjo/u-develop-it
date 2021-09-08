const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MYSQL username,
        user: 'root',
        // Your MYSQL password
        password: '1hyh9jaf',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;