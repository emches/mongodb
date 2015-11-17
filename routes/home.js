var express = require('express');
var homeRouter = express.Router();
var models = require('../models/');
var Page = models.Page;
var User = models.User;
// could use one line instead: var router = require('express').Router();

homeRouter.get('/search', function (req, res) {
   var tags = req.query.tags
   //console.log("tags", tag)

    if (tags){
      tags = tags.split(/[,| ]/).filter(function(item){
       return item;
      });

      console.log("TAGS", tags)
      Page.find({
       // $in matches a set of possibilities
       tags: {$in: tags}
      }).exec().then(function(pages){
         res.render('search', { pages: pages})

      });

  } else{
   res.render('search');
 }
});





// note: this is not very REST-ful. We will talk about REST in the future.


module.exports = homeRouter;
