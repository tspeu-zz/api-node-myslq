const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');

const config = require('./app/config');
const puerto = config.app.port;
const mysql = require('mysql');
const api = require('./app/routes/api.routes');






const app = express();

// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


  
  
  // connect db+
  const db = mysql.createConnection({
      host     : config.db.host,
      user     : config.db.user,
      password : '',
      database : config.db.database
    });
    // db.connect();
    db.connect(function(err) {
        if (err) {
            console.log('Could not connect to the database. Exiting now...', err);
            throw err;
        } else {
            console.log('Successfully Conectado a db OK -> connection ->', config.db.database);
        }
        
    });
    
// routes 
app.use('/api', api);
    

app.listen(config.app.port, () => {
    console.log('Server is up and running on port : ' + puerto);
});