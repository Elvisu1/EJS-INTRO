const pagesIndex = (req, res) => {
  const data = {
    title: 'Home page',
    currentPage: 'home',
  };
  res.render('index', data);
};
const pagesAbout = '';

const pagesContact = '';

const pagesLayout = '';

module.exports = {
  pagesIndex,
};
