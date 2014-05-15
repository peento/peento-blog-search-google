/**
 * Router: google search
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

module.exports = function (ns, router) {
  var app = ns('app');

  router.get('/google_search', function (req, res, next) {
    app.call('config.get', {name: 'search_google_host'}, function (err, host) {
      host = host || req.header('host');
      var keyword = req.query.search;
      res.redirect('https://www.google.com/#q=site:' + host + '+' + keyword);
    });
  });

};
