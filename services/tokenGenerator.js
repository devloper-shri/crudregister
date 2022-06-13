const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '50m',
  algorithm: 'HS256',
};

const secret = 'secretdetoken';

function createToken(user) {
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
}

module.exports = {
  createToken,
};
