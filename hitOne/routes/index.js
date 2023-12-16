var express = require('express');
var router = express.Router();
const userModal = require("./users");
const { render } = require('../app');
/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.ban = true; // session implemented.
  res.render('index');
});

router.get("/checkBan", (req,res)=>{
  if(req.session.ban === true){
    res.send("you are banned")
  }
})

router.get("/removeBan",(req,res)=>{
  req.session.destroy((err)=>{
    console.log(err);
    res.send("Ban Removed");
  })
})

router.get('/allusers', async(req,res)=>{
  const allUsers = await userModal.find();
  res.send(allUsers);
})

router.get('/oneUser', async(req,res)=>{
  const oneUser = await userModal.findOne({username:"harsh"});
  res.send(oneUser);
})

router.get('/delete', async (req,res)=>{
  const deleted = await userModal.findOneAndDelete({
    username:"harsh"
  });
  res.send(deleted);
})

router.get('/create', async function(req, res) {
  const createdUser = await userModal.create({
    username: "harsh",
    name: "harsh",
    age:25
   
  });
  res.send(createdUser);




});




module.exports = router;
