var express = require('express');
var router = express.Router();
var Post = require('../models/post');

router.get('/', function(req, res) {
	Post.find({}, function(err, docs) {
		res.send(docs);
	});
});

router.post('/', function(req, res) {
	var newPost = new Post(req.body);
	newPost.save(function(err, docs) {
		res.send(docs);
	});
});

router.delete(':/id', function(req, res) {
	var postId = req.params.id;
	Post.remove({_id: postId}, function() {
		res.send('success');	
	});
});



module.exports = router;