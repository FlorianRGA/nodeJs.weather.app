var express = require('express');
var router = express.Router();
const user_ip = require('./utils/user_Ip');
const current_weather = require('./utils/meteo_api');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Méteo',

  });
});

module.exports = router
