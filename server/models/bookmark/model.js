var mongoose = require('mongoose');

var BookmarkSchema = new mongoose.Schema({
    link: String
});

module.exports = mongoose.model('bookmark', BookmarkSchema);