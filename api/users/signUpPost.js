var sha256 = require('js-sha256');
var jwt = require('jsonwebtoken');
var { v4: uuidv4 } = require('uuid');
var { jwtSign } = require('../../utils/auth');
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
    const userId = uuidv4();
    const time = new Date();
    const createRes = await Users.create({
      id,
      name: userName,
      password: sha256(userPassword),
      type: type
    });
    console.log('Create new User:')
    console.log(createRes);
    if (createRes) {
      const token = jwtSign(userId);
      res.json({
        status: 0,
        data: {
          name: userName,
          type: type,
          token: token
        }
      })
    } 
    else throw 'error';
  } catch {
    res.json(userExist);
  }
}

module.exports = signUpPost;