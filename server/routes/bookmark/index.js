var Bookmark = require("../../models/bookmark/index");

module.exports = function(app) {
    app.get('/bookmarks', function (req, res, next) {
        Bookmark.all(function (err, bookmarks) {
            if (err) return next(err);
            res.json(bookmarks);
        });
    });

    app.get('/bookmarks/:id', function (req, res, next) {
        var id = req.params.id;
        Bookmark.get({'_id': id}, function (err, bookmark) {
            if (err) return next(err);
            res.json(bookmark);
        });
    });

    app.post('/bookmarks', function (req, res, next) {
        var bookmark = req.body;
        Bookmark.create(bookmark, function (err, bookmark) {
            if (err) return next(err);
            res.json(bookmark);
        });
    });

    app.put('/bookmarks/:id', function (req, res, next) {
        var id = req.params.id;
        var bookmark = req.body;
        Bookmark.update(id, bookmark, function (err, bookmark) {
            if (err) return next(err);
            res.json(bookmark);
        });
    });

    app.delete('/bookmarks/:id', function (req, res, next) {
        var id = req.params.id;
        Bookmark.remove(id, function (err, bookmark) {
            if (err) return next(err);
            res.json(bookmark);
        });
    });
};
