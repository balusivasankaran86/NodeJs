var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    console.log(req.params.name);
    res.send('unhandled operation');
});

router.get('/findall', function (req, res) {
    var collection = global.db.collection('t_users');
    collection.find().toArray(function (err, items) {
        console.log(items.length);
        return res.send(items);
    }); 
});

router.post('/save', function (req, res) {
    var t_users = global.db.collection('t_users');
    t_users.insert(req.body, { w: 1 }, function (err, result) { 
    
    });
   
    res.send(req.body);
});

router.put('/find:id', function (req, res) {
    res.send(request.params.id);
});

router.post('/remove', function (req, res) {
    res.send('POST route on things.');
});

//export this router to use in our app.js
module.exports = router;