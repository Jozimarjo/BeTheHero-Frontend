const crypto = require('crypto');

module.exports = function ganarateUniqueId() {
  return crypto.randomBytes(4).toString('HEX');
};
