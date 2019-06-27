
const mysql = require('mysql');
const config = require('./config');

const { db: { host, user, password, database  } } = config;
//local mysql db connection
// const connection = mysql.createConnection({
//     host     : db.host,
//     user     : db.user,
//     password : '',
//     database : db.database
// });
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'recetapp'
});

connection.connect(function(err) {
    if (err) {
        console.log('Could not connect to the database. Exiting now...', err);
        throw err;
    } else {
        console.log('Successfully Conectado a db no hay ERR');
    }
     
});

module.exports = connection;