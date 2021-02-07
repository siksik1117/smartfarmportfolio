var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/collection/1', function(req, res, next) {
  res.render('collection1');
});

router.get('/collection/2', function(req, res, next) {
  res.render('calendar');
});

router.get('/collection/3', function(req, res, next) {
  res.render('mainchart');
});

router.get('/collection/4', function(req, res, next) {
  res.render('chartsection1');
});

router.get('/collection/5', function(req, res, next) {
  res.render('section1');
});

router.get('/collection/6', function(req, res, next) {
  res.render('raspscreen');
});

router.get('/collection/7', function(req, res, next) {
  res.render('login');
});

router.get('/collection/8', function(req, res, next) {
  res.render('join');
});
module.exports = router;
