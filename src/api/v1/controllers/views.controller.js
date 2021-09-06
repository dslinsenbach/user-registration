const getHome = (req, res) => {
  res.render('registration', { page: 'registration', title: 'Registration Form' });
};

const getUsers = (req, res) => {
  res.render('admin/users', { page: 'admin', title: 'Administration | Users' });
};

module.exports = {
  getHome,
  getUsers,
};
