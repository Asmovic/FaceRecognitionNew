/*
 * File: index.js
 * Project: mix-test
 * File Created: Sunday, 3rd February 2019 11:05:16 pm
 * Author: Temitayo Bodunrin (temitayo@brandnaware.com)
 * -----
 * Last Modified: Sunday, 3rd February 2019 11:15:26 pm
 * Modified By: Temitayo Bodunrin (temitayo@brandnaware.com)
 * -----
 * Copyright 2019, Brandnaware Nigeria
 */

const path = require('path');

const register = require('../controllers/register');
const signin = require('../controllers/signin');
const profile = require('../controllers/profile');
const image = require('../controllers/image');

module.exports = app => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(`${__dirname}/../views/home.html`));
    });

    app.get('/profile/:id', (req, res) => {
        profile.profileHandler(req, res);
    });

    app.post('/signin', (req, res) => {
        signin.signinHandler(req, res);
    });

    app.post('/register', (req, res) => {
        register.registerHandler(req, res);
    });

    app.put('/image', (req, res) => {
        image.imageHandler(req, res);
    });
    app.post('/API', (req, res) => {
        image.ApiHandler(req, res);
    });
};
