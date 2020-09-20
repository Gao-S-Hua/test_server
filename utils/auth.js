const jwt = require('jsonwebtoken');

const privateKey = 'secret key';
const exprTime = 5;

function jwtSign(id) {
  const time = new Date();
  return jwt.sign({ id, expr: time.getTime() + exprTime * 1000 * 60}, privateKey);
}

exports.jwtSign = jwtSign;