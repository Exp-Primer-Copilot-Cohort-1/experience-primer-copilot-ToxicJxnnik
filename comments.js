// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/comment');

// create schema
var commentSchema = new mongoose.Schema({
  name: String,
  comment: String
});

// create model
var Comment = mongoose.model('Comment', commentSchema);

// set template engine
app.set('view engine', 'ejs');

// set static file
app.use(express.static('public'));

// use body parser
app.use(bodyParser.urlencoded({extended: true}));

// set route
app.get('/', function(req, res) {
  Comment.find({}, function(err, data) {
    if (err) throw err;
    res.render('index', {comments: data});
  });
});

app.post('/comment', function(req, res) {
  var newComment = new Comment({
    name: req.body.name,
    comment: req.body.comment
  });
  newComment.save(function(err, data) {
    if (err) throw err;
    res.redirect('/');
  });
});

app.listen(3000, function() {
  console.log('server is running on port 3000');
});