var express = require('express');
var router = express.Router();
var models = require('../models/');
var Page = models.Page;
var User = models.User;
// could use one line instead: var router = require('express').Router();

router.get('/', function (req, res) {
 //res.redirect('/');
 Page.find().exec().then (function(pages){


      res.render('index', {pages : pages})
 });

});

router.post('/', function (req, res, next) {

	var page = new Page( {
		title: req.body.title,
		content : req.body.content,
		status : req.body.status,
        tags: req.body.tags
	})

	page.save(function(err,loadedPage) {
		if(err) console.error(err);
		res.redirect(loadedPage.route);
	}).then(null, next)

});

router.get('/add', function (req, res) {
 res.render('addpage');
});



router.get('/:page', function (req, res, next) {
var urlTitle = req.params.page
console.log("urlTitle", urlTitle);

   Page
   .findOne( { 'urlTitle': urlTitle})
   .exec()
   .then(function ( pageContent){
      console.log("pageContent", pageContent)
      console.log("tags", pageContent.tags);
      console.log("tagslen", pageContent.tags.length);


      res.render('wikipage', {pageContent : pageContent , tags: pageContent.tags })

   }).then(null, next);

});






// note: this is not very REST-ful. We will talk about REST in the future.


module.exports = router;
