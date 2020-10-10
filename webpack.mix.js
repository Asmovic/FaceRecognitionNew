/*
 * File: webpack.mix.js
 * Project: mix-test
 * File Created: Sunday, 3rd February 2019 11:09:15 pm
 * Author: Temitayo Bodunrin (temitayo@brandnaware.com)
 * -----
 * Last Modified: Monday, 4th February 2019 12:06:23 am
 * Modified By: Temitayo Bodunrin (temitayo@brandnaware.com)
 * -----
 * Copyright 2019, Brandnaware Nigeria
 */

const mix = require('laravel-mix');

mix.react('client/main.js', 'public/js/')
    .setPublicPath('public');

mix.browserSync({
    proxy: 'localhost:5000',
    port: '3000'
});