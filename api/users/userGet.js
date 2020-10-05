var Users = require('../../models/user');

async function userGet(req, res) {
  const user = await Users.findOne({id: req.userId});
  const rtn = {
    name: user.name,
    type: user.type
  }
  res.json(rtn);
}

module.exports = userGet;