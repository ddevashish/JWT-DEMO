var express = require('express');
var jwt = require('jsonwebtoken');

const app = express();
const SECRETKEY = process.env.SECRETKEY || "my_secret_key";
const JWT_EXPIRESIN = process.env.JWT_EXPIRESIN || "30s"
const PORT  = process.env.PORT || 3000;
app.set('port', PORT);

// Default open API to check whether our application is working
app.get('/api', function(req, res){
    res.json({
        message: "Welcome to the JWT API",
        "Generate JWT Token": "Hit a post request to " + req.hostname + "/api/login"
    });
});

app.post('/api/login', (req, res) => {
    // skipping authentication step and mocking user directly for demo
    const user = {
        id : 1,
        username: "Dev",
        email: "debashish@gmail.com"
    };
    
    // Generate and return auth token using user object and secret key
    jwt.sign({user}, SECRETKEY, { expiresIn: JWT_EXPIRESIN}, (err, token) => {
        res.json({
            token
        });
    });
});

// API to verify the JWT token and returning auththenticate data
app.post('/api/verifyJwtToken', verifyToken, function(req, res){
    jwt.verify(req.token, SECRETKEY, function(err, authData){
        if(err) {
            res.sendStatus(403);  // send response forbidden
        } else {
            res.json({
                message: "JWT token verified",
                authData
            });
        }
    });
});

function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers["authorization"];
    // Check if bearer is not undefined
    if(typeof bearerHeader !== 'undefined') {
        // Bearer Header Format
        // Authentication = Bearer <auth-token>
        // Split with space value
        const bearer = bearerHeader.split(" ");
        // Get token from splited array
        const bearerToken = bearer[1];
        // Set the token into request
        req.token = bearerToken;
        // Called Next middleware
        next();
    } else{
        res.sendStatus(403);
    }
}

app.listen(PORT, function(){
    console.log('App listening on port ' + PORT+ '!')
});