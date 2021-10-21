const mysql = require('mysql2/promise');

const dbConfig = require('../dbConfig');

async function dbAction(sql, dbData = []) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const [dbResult] = await conn.execute(sql, dbData);
    await conn.end();
    return dbResult;
  } catch (error) {
    console.error('Books Model error ', error.message);
    return false;
  }
}

// getAllBooks, postNewBook

const getAllBooks = async () => {
  // 1. get all the data
  const sql = `
  SELECT books.id, books.title, books.author, books.timeStamp, books.year, book_categories.cat_name AS category
  FROM books
  LEFT JOIN book_categories
  ON book_categories.id = books.category
  `;

  return await dbAction(sql);
};

const getBookCategories = async () => {
  // get categories for select
  const sql = 'SELECT * from book_categories';
  const categories = await dbAction(sql);
  return categories;
};

const addNewBook = async (newBookData) => {
  const sql = `
  INSERT INTO books (title, author, year, category, image) 
  VALUES (?, ?, ?, ?, 'place.jpg')`;
  const dbResult = await dbAction(sql, Object.values(newBookData));
  return dbResult;
};

module.exports = {
  getAllBooks,
  getBookCategories,
  addNewBook,
};
