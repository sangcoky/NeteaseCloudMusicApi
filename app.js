#!/usr/bin/env node
require('./server').serveNcmApi({
  checkVersion: true,
})
var bodyParser = require('body-parser')
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
