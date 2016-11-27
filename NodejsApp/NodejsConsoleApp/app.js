var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var host = "127.0.0.1";
var port = 3000;

//usage for returning json result
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/mydb", function (err, database) {
    if (!err) {
        global.db = database;
        console.log("database connected");
    }
    else {
        console.log("database not connected");
    }
});

app.get('/', function (req, res) {
    
    res.send("Hello world!");
});

var employee = require('./routes/employee.js');
var usertype = require('./routes/usertype.js');

app.use('/employee', employee);
app.use('/usertype', usertype);



app.listen(port, host);

console.log('Server running at http://' + host + ':' + port + '/');

