var Bookmark = require('./model');

module.exports = {
    get: function (id, callback) {
        Bookmark.findOne(id, function (err, bookmark) {
            callback(err, bookmark);
        });
    },
    all: function(callback) {
        Bookmark.find(function(err, bookmarks) {
            callback(err, bookmarks);
        })
    },
    create: function(req, callback) {
        var bookmark = new Bookmark();
        bookmark.link = req.link;
        bookmark.save(function(err, result) {
            callback(err, result);
        })
    },
    update: function(id, req, callback) {
        Bookmark.findOne(id, function (err, bookmark) {
            bookmark.link = req.link;
            bookmark.save(function(err, result) {
                callback(err, result);
            })
        });
    },
    remove: function(id, callback) {
        Bookmark.findByIdAndRemove(id, function(err, bookmark) {
            callback(err, bookmark);
        })
    }
};
