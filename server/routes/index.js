module.exports = function(app) {
    // non object specific routes here

    // bookmark specific routes defined in bookmarks
    require('./bookmark/index')(app);
};