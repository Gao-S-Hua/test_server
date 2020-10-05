var sha256 = require('js-sha256');
var jwt = require('jsonwebtoken');
var { jwtSign } = require('../../utils/auth');
var Users = require('../../models/user');

const userError = {
  status: -1,
  data: {}
}

function loginPost(req, res) {
  const userName = req.body.name;
  const userPassword = req.body.password;
  Users.find({
    name: userName,
    password: sha256(userPassword)
  }, (err, dbres) => {
    console.log(dbres);
    if(err || dbres.length === 0) {
      res.json(userError);
      console.log('user log fail')
    } else {
      const userInfo = dbres[0];
      console.log(dbres);
      const userId = userInfo.id;
      res.json({
        status: 0,
        data: {
          name: userInfo.name,
          type: userInfo.type,
          token: jwtSign(userId)
        }
      })
    }
  })
}

module.exports = loginPost;