var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('/chatroom', function(req, res, next) {
  res.render('chatroom');
});

router.post('/receivemsg', function(req, res, next) {
  console.log(req.body.myMessage);
  res.send(req.body.myMessage);
});



module.exports = router;
