var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/profile/:profileName', function(req, res, next) {
  res.render('profile', {name: req.params.profileName});
});




module.exports = router;