/*
 * Gleb Chuvpilo
 * Created: June 14, 2016
 */
 /// <reference path="./typings/index.d.ts" />
'use strict';
var express = require("express");
var app = express();
var PORT = 9000;
app.get('/', function (req, res) {
    res.send({ success: true });
});
app.get('/v1/test', function (req, res) {
    res.send({ success: true });
});
app.listen(PORT, function () {
    console.log('App listening on port ' + PORT);
});
