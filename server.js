//Now we have access to the entire express API
var express = require('express');

//create app
var app = express();

//folder to serve
app.use(express.static('public'));

//starting server
app.listen(3000, function(){
    console.log('Express server is running on port 3000');
});