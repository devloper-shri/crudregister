const { User } = require('../models');

const getLoginUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  getLoginUser,
};
