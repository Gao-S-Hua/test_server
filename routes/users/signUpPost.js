var sha256 = require('js-sha256');
var jwt = require('jsonwebtoken');
var { v4: uuidv4 } = require('uuid');
var { privateKey, exprTime } = require('../../utils/auth');
var Users = require('../../models/user');

const userExist = {
  status: -1,
  data: {}
}

async function signUpPost(req, res) {
  const userName = req.body.name;
  const userPassword = req.body.password;
  const type = req.body.type;

  // Check whether User exist
  try {
    const ans = await Users.find({ name: userName });
    if (ans.length > 0) {
      throw 'User exist';
    }
  } catch {
    // user exist
    res.json(userExist);
    return;
  }

  // create new User
  try {
    const createRes = await Users.create({
      name: userName,
      password: sha256(userPassword),
      id: uuidv4(),
      type: type
    });
    console.log(createRes);
    if(createRes.errors) throw "error";
    res.json({
      status: 0,
      data: {
        name: userName,
        type: type,
        token: jwt.sign({ id, expr: time.getTime() + exprTime * 1000 * 60}, privateKey)
      }
    })
  } catch {
    res.json(userExist);
  }
}

module.exports = signUpPost;