const jwt = require('jsonwebtoken');
const secret = require('crypto').randomBytes(15).toString('hex');

const auth = {
  sign(id, name) {
    return jwt.sign({ id, name }, secret);
  },
  identity(token) {
    return jwt.verify(token, secret);
  },
};

module.exports = auth;
