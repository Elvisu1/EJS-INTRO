// booksIndex, booksGetNew, booksPostNew

const { getAllBooks } = require('../models/booksModels');

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

module.exports = {
    booksIndex,
};
