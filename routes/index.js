var express = require('express');
var router = express.Router();
var passport = require('passport');

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/admin');
  }
);

router.get('/admin',
  ensureAuthenticated,
  (req, res) => {
    res.render('admin', { user: req.session.passport.user })
  }
);

module.exports = router;
