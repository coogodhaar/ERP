const bcrypt = require('bcryptjs');

exports.hashPassword = (password) => bcrypt.hashSync(password, 10);
exports.comparePassword = (password, hash) => bcrypt.compareSync(password, hash);
