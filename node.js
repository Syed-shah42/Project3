const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'database'
});

connection.connect();

connection.query('Select', function(error, results, fields){
    if(error) throw error;
    console.log(results);
});

connection.end();