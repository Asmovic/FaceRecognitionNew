/*
 * File: index.js
 * Project: mix-test
 * File Created: Sunday, 3rd February 2019 11:02:53 pm
 * Author: Temitayo Bodunrin (temitayo@brandnaware.com)
 * -----
 * Last Modified: Monday, 4th February 2019 12:28:45 am
 * Modified By: Temitayo Bodunrin (temitayo@brandnaware.com)
 * -----
 * Copyright 2019, Brandnaware Nigeria
 */

const express = require('express'),
    http = require('http'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser');
require('dotenv').config();

//Store all HTML files in view folder.
app.use(express.static(__dirname + '/views'));

//Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(cors());

// Start the router
require('./routes/')(app);

const port = process.env.PORT || 5000,
    server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
