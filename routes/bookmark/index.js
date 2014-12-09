var bookmark = require("../../models/bookmark");


var express = require("express");
var app = module.exports = express();

app.get('/', function (req, res, next) {
    bookmark.all(function(err, bookmarks) {
        if (err) return next(err);
        res.json(bookmarks);
    });
});
