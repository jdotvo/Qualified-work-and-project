const findAuthorById = (authors, id) => {
  return authors.find((author) => author.id === id);
}

const findBookById = (books, id) => {
  return books.find((book) => book.id === id);
}

const partitionBooksByBorrowedStatus = (books) => {
  let checkedOutBooks = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false));
                                     
  let returnedBooks = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true));
  
  let result = [[...checkedOutBooks], [...returnedBooks]];
  return result;
}

const getBorrowersForBook = (book, accounts) => {
  return book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return { ...borrow, ...account };
  }).slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
