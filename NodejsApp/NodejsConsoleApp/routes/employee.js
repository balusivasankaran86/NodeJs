var express = require('express');
var router = express.Router();



router.get('/', function (req, res) {
  
    res.send('GET route on things.');
});

router.get('/emp', function (req, res) {
    var collection = db.collection('t_users');
    collection.find().toArray(function (err, items) {
        console.log(items.length);
    });
    var accountMock = {
        "username": "Balu Sivasankaran",
        "password": "1234",
        "twitter": "@nraboy"
    }
    return res.send(accountMock);
    
});

router.post('/', function (req, res) {
    res.send('POST route on things.');
});

//export this router to use in our app.js
module.exports = router;