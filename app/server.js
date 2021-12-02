var express = require('express');
var app = express();
var port = process.env.PORT || 1341
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));
var router = require('./routes');
app.use('/api', router);
app.listen(port);
