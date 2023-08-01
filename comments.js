// Create web server 
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
// Create web server 
// // Configure web server 
// Configure web server 
app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});
// Configure web server 
// // Start web server 
// Start web server 
server.listen(8080);
// Start web server 
// // Configure routes 
// Configure routes 
app.get('/', function(req, res) {
    res.send('Hello World');
});
// Configure routes 
// // Create web server 
// Create web server 
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
// Create web server 
// // Configure web server 
// Configure web server 
app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});
// Configure web server 
// // Start web server 
// Start web server 
server.listen(8080);
// Start web server 
// // Configure routes 
// Configure routes 
app.get('/', function(req, res) {
    res.send('Hello World');
});
// Configure routes 
// // Configure database 
// Configure database 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comments');
var CommentSchema = new mongoose.Schema({
    email: String,
    comment: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});
var Comment = mongoose.model('Comment', CommentSchema);
// Configure database 
// // Create web server 
// Create web server 
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
// Create web server 
// // Configure web server 
// Configure web server 
app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});
// Configure web server 
// // Start web server 
// Start web server 
server.listen(8080);
// Start web server 
// // Configure routes 
// Configure routes 
app.get('/', function(req, res) {
    res.send('Hello World');
});
// Configure routes 
// // Configure database 
// Configure database 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comments');
var Comment