// Import required libraries
const express=require('express');
const db=require('./config/mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportJwt = require('./config/passport-jwt-strategy');
const session = require('express-session');

const app=express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//initialize passport
app.use(passport.initialize());


    
// setting up routes 
app.use('/',require('./routes'));

// Start the server
const port=8000;
app.listen(port, function(err){

    if(err){
        console.log(`Error running in server : ${err}`);
    }
    console.log(`Server is running in port : ${port}`);
});