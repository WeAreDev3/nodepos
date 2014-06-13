var express = require('express'),
    app = express(),

    swig = require('swig'),

    config = require('./config');

// Assign swig.renderFile to all .html files
app.engine('html', swig.renderFile);

// Tell Express where the views are in our folders
app.set('view engine', 'html');
app.set('views', config.root + '/server/views');

// Run our router module to prepare for incoming requests
require(config.root + '/server/routes')(app);

app.listen(3000);
console.log('NodePOS is listening on port', 3000);