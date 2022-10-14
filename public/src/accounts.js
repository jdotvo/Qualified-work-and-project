const findAccountById = (accounts, id) => {
  return accounts.find((accountId) => accountId.id === id);
}

const sortAccountsByLastName = (accounts) => {
  return accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
}

const getTotalNumberOfBorrows = (account, books)  => {
  let totalOfBorrows = 0;
  for (let i = 0; i<books.length; i++) {
    for (let j = 0; j<books[i].borrows.length; j++) {
      if (account.id === books[i].borrows[j].id) {
        totalOfBorrows += 1;
      }
    }
  }
  return totalOfBorrows;
}

const getBooksPossessedByAccount = (account, books, authors) => {
  let possessedBooks = [];
  books.forEach((book) => {
    let borrowedBooks = book.borrows;
    if (borrowedBooks.find((borrow) => borrow.id === account.id && borrow.returned === false)){
     possessedBooks.push(book);
    }
  });
  
  possessedBooks.forEach((book) => {
    let author = authors.find((person) => person.id === book.authorId);
    book["author"] = author;
  });
  return possessedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
