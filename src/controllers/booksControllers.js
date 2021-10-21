// booksIndex, booksShowForm, booksPostNew

const {
  getAllBooks,
  getBookCategories,
  addNewBook,
} = require('../models/booksModels');

const booksIndex = async (req, res) => {
  const feedback = { msg: '', error: '' };
  // 1. get all the data
  const books = await getAllBooks();

  if (books === false) {
    feedback.error = 'Error gettig books';
  }

  // 2. send response page with data
  const data = {
    title: 'Our books',
    currentPage: 'books',
    books: books || [],
    feedback,
  };
  res.render('books/index', data);
};

const booksShowForm = async (req, res) => {
  const feedback = { msg: '', error: '' };
  // get categories for select
  const categories = await getBookCategories();

  if (categories === false) {
    feedback.error = 'error getting categories';
  }

  // console.log('categories', categories);
  const data = {
    title: 'Create book',
    currentPage: 'booksNew',
    categories: categories,
    feedback,
  };

  res.render('books/new', data);
};

const booksNewBook = async (req, res) => {
  const feedback = { msg: '', error: '' };
  // create new book
  const dbResult = await addNewBook(req.body);
  if (dbResult === false) {
    feedback.error = 'error adding book';
  } else {
    feedback.msg = 'book created';
  }
  // resrs.send({ msg: 'book created', dbResult });

  const data = {
    title: 'Create book',
    currentPage: 'booksNew',
    feedback: feedback,
  };
  res.render('books/new', data);
};

module.exports = {
  booksIndex,
  booksShowForm,
  booksNewBook,
};
