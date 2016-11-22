const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Welcome to Express!';
  indexController.sum(1, 2, (error, results) => {
    if (error) return next(error);
    if (results) {
      renderObject.sum = results;
      res.render('index', renderObject);
    }
  });
});
router.get('/map', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Maps';
  res.render('map', renderObject);
});
router.get('/test', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Test Heat';
  res.render('test_heat', renderObject);
});

module.exports = router;
