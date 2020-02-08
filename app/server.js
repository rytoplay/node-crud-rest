/*
  Description: This is the setup of the nodeJS server.
  Author: Vitor Veras
  Creation date:  02/12/2017
*/

//CALL PACKAGES
var cors = require('cors');
var express = require('express');
var app = express();
var db = require('./models/db');
var Router = require('./controllers/routes');
//RUN SERVER ON PORT 3000
var port = process.env.port || 8080;

//add cors
app.use(cors());
app.options('*', cors());

//setup /api as root route
app.use('/api', Router);

//RUN SERVER ON PORT 3000
app.listen(port);
console.log("Running server on port " + port);
