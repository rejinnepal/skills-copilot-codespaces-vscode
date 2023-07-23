// Create web server

// 1. Create web server
// 2. Read comments from comments.json
// 3. Send comments to client

// 1. Create web server
const express = require('express');
const app = express();

// 2. Read comments from comments.json
const fs = require('fs');
const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// 3. Send comments to client
app.get('/comments', function(req, res) {
    res.send(comments);
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});