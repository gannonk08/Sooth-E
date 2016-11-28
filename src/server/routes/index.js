const express = require('express');
const router = express.Router();
const fs = require('fs');
const turf = require('turf');
var L = require('leaflet-headless');
var document = global.document;

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
  renderObject.testData = [[39.697090037185, -104.987839985354, 4.09 ],[39.7111900329856, -104.987639972624, 6.93 ],[39.7110900266208, -104.97342997733598, 8.74 ],[39.7127899845497, -104.973439970459, 9.98 ],[39.7146299964712, -104.973299991603, 6.21 ],[39.7185899780264, -104.973140026501, 4.72 ],[39.718061971616, -104.971754157092, 3.67 ],[39.71435001251619, -104.965243951901, 5.76 ],[39.7156230241305, -104.959278643271, 2.59 ],[39.7020522566887, -104.95919927081398, 5.99 ],[39.689365672421, -104.95944044661599, 3.24 ],[39.6847900056782, -104.95951000801898, 1.64 ],[39.6848542144381, -104.96275265627499, 3.51 ],[39.6899229421781, -104.973519717125, 5.88 ],[39.690303655932, -104.974209760804, 3.31 ],[39.69244517079729, -104.97719598431098, 9.86 ],[39.6967895906207, -104.98222616478299, 4.77 ],[39.697090037185, -104.987839985354, 0.2 ]]
  res.render('test_heat', renderObject);
});

router.get('/test', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Test Heat';

  res.render('test_heat', renderObject);
});

router.get('/data', function (req, res, next) {
  var testData = [[39.697090037185, -104.987839985354, 4.09 ],[39.7111900329856, -104.987639972624, 6.93 ],[39.7110900266208, -104.97342997733598, 8.74 ],[39.7127899845497, -104.973439970459, 9.98 ],[39.7146299964712, -104.973299991603, 6.21 ],[39.7185899780264, -104.973140026501, 4.72 ],[39.718061971616, -104.971754157092, 3.67 ],[39.71435001251619, -104.965243951901, 5.76 ],[39.7156230241305, -104.959278643271, 2.59 ],[39.7020522566887, -104.95919927081398, 5.99 ],[39.689365672421, -104.95944044661599, 3.24 ],[39.6847900056782, -104.95951000801898, 1.64 ],[39.6848542144381, -104.96275265627499, 3.51 ],[39.6899229421781, -104.973519717125, 5.88 ],[39.690303655932, -104.974209760804, 3.31 ],[39.69244517079729, -104.97719598431098, 9.86 ],[39.6967895906207, -104.98222616478299, 4.77 ],[39.697090037185, -104.987839985354, 0.2 ]]

  res.send(testData);
});

module.exports = router;
