const bcrypt = require('bcrypt');

const { registrationData } = require('../data');

const saltRounds = 10;

const register = async (email, password, firstname, lastname, phone) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = await registrationData.register(email, hashedPassword, firstname, lastname, phone);

  if (user[0][0]) {
    return user[0][0];
  }
  throw new Error('Could not retrieve the user record');
};

module.exports = {
  register,
};
