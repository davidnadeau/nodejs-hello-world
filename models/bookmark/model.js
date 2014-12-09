var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Bookmark = new Schema({
    link: {type: String}
});

module.exports = mongoose.model('bookmark', Bookmark);