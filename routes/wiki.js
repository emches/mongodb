var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();

router.get('/', function (req, res) {
 res.redirect('/');

});

router.post('/', function (req, res) {
 res.json(req.body)

});

router.get('/add', function (req, res) {
 res.render('addpage');
});






// note: this is not very REST-ful. We will talk about REST in the future.


module.exports = router;
