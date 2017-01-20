//Now we have access to the entire express API
var express = require('express');


//create app
var app = express();
var PORT = process.env.PORT;

//redirect HTTPS traffic to HTTP
app.use(function(req, res, next) {
    //if traffic is http, call next
    if(req.headers['x-forwarded-proto'] === 'http') {
        next();    
    }
    //redirect them
    else {
        res.redirect('http://' + req.hostname + req.url);    
    }    
});

//folder to serve
app.use(express.static('public'));

//starting server
app.listen(PORT, function(){
    console.log('Express server is running on port ' + PORT);
});