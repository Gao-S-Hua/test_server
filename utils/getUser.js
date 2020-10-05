const jwt = require('jsonwebtoken');

const getUser = function(req, res, next) {
  const auth = req.headers.authorization;
  try {
    const token = jwt.decode(auth.split(' ')[1]);
    req.userId = token.id;
  } catch {
    req.userId = null;
  }    
  next();
}

module.exports = getUser;