var express = require('express');
var router = express.Router();
var controllers = require('../controllers');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getData', function(req, res, next) {
  console.log(req.body);
  controllers.getData(req.body.text).then(ret => {
    res.json(ret[0] || {});
  })
  .catch(err => next(err));
})
module.exports = router;
