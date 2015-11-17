var express = require('express');
var router = express.Router();
var models = require('../models/'); 
var Page = models.Page; 
var User = models.User; 
// could use one line instead: var router = require('express').Router();

router.get('/', function (req, res) {
 res.redirect('/');

});

router.post('/', function (req, res) {
	
	var page = new Page( {
		title: req.body.title,
		content : req.body.content,
		status : req.body.status
	})

	page.save(function(err,loadedPage) {
		if(err) console.error(err); 
		res.json(loadedPage);  
	})

});

router.get('/add', function (req, res) {
 res.render('addpage');
});






// note: this is not very REST-ful. We will talk about REST in the future.


module.exports = router;
