Bookmark = require('./model');

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
    }
};
