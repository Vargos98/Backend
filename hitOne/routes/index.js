var express = require('express');
var router = express.Router();
const userModal = require("./users");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/create', async function(req, res) {
  const createdUser = await userModal.create({
    username: "harsh",
    name: "harsh",
    age:25
  });
res.send(createdUser);

});

module.exports = router;
