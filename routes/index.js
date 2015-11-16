var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();

router.get('/', function (req, res) {
 res.render('index')
});




// note: this is not very REST-ful. We will talk about REST in the future.


module.exports = router;
