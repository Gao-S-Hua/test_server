const jwt = require('jsonwebtoken');

const noAuth = { msg: 'No Authorization' };
const authExpire = { msg: 'Authorization has expired' };
const authErr = { msg: 'Your Authorization is invalid' };

const exceptions = [
  '/users/login',
  '/users/signup'
]

const authCheck = function(req, res, next) {
  console.log(req.path);
  if (exceptions.includes(req.path)) {
    next();
    return;
  }
  if (req.headers.authorization) {
    const auth = req.headers.authorization;
    try {
      const token = jwt.decode(auth.split(' ')[1]);
      const current = new Date();
      if (token.expr < current) {
        res.status(403).json(authExpire);
      } else {
        req.userId = token.id;
        console.log(token);
        next(); 
      }
    } catch {
      req.userId = null;
      res.status(403).json(authErr);
    }  
  } else {
    res.status(401).json(noAuth)
  }

}

module.exports = authCheck;