const pagesIndex = (req, res) => {
  const data = {
    title: 'Home page',
    currentPage: 'home',
  };
  res.render('index', data);
};
const pagesAbout = (req, res) => {
  // got to db, fetch data
  const points = ['Html', 'Css', 'Js'];
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return res.status(403).send('Forbiden, please log in');
  }
  // pass data
  res.render('about', {
    points: points,
    title: 'About Us All',
    currentPage: 'about',
  });
};

const pagesContact = (req, res) => {
  const users = require('../db/users');

  res.render('contact', { title: 'Contact us today', users });
};

const pagesLayout = (req, res) => {
  res.render('mainLayout', { title: 'layout', asideOn: false });
};

module.exports = {
  pagesIndex,
  pagesAbout,
  pagesContact,
  pagesLayout,
};
