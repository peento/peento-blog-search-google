/**
 * Router: google search
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

module.exports = function (ns, router) {

  router.get('/google_search', function (req, res, next) {
    var host = ns('config.search.host') || req.header('host');
    var keyword = req.query.search;
    res.redirect('https://www.google.com/#q=site:' + host + '+' + keyword);
  });

};
