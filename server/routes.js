module.exports = function (app) {
    // The homepage
    app.route('/').get(function (req, res) {
        res.render('index');
    });
};