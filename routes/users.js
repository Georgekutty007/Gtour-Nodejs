var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users' });
});

/* Logout and redirect to index page. */
router.get('/logout', function (req, res, next) {
  res.redirect('/');

});
module.exports = router;
