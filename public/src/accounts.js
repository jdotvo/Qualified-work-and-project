//Use find() method on accounts array
//Provide a callback function on the find() method to search accounts arrays to check if any ids in the accounts array matches the id argument provided 
//Use strict equality to compare id within object of accounts array with the id parameter
const findAccountById = (accounts, id) => {
  return accounts.find((accountId) => accountId.id === id);
}

//Use sort() method to arrange objects within accounts array in alphabetical order
//Provide callback function on sort() method to compare last name of accountA and last name of accountB
//If the number returned is negative, the last name item of accountA will be moved before the last name item of accountB. If the number returned is positive, the opposite will occur
const sortAccountsByLastName = (accounts) => {
  return accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
}

//Use reduce() method on books array
//Use find()method on borrows array in book object to check to see if account.id matches borrow.id using strict equality
//If borrowedBook has a value, add 1 to sum 
const getTotalNumberOfBorrows = (account, books)  => {
   return books.reduce((sum, book) => {
    let borrowedBook = book.borrows.find((borrow) => {
      return account.id === borrow.id;
    });
    if (borrowedBook){
      sum += 1;
    }
    return sum;
  }, 0)
}

//Declare a variable to store an empty array
//Loop through the books array with the forEach() method
//Declare a variable to store the borrows object
//Throughout the loop, check to see if both borrow.id matches account.id and borrowed book is still checked out(borrow.returned equals to false) by using strict equality
//If the conditional statement is true, push the book object into the empty array variable, possessedBooks
const getBooksPossessedByAccount = (account, books, authors) => {
  let possessedBooks = [];
  books.forEach((book) => {
    let borrowedBooks = book.borrows;
    if (borrowedBooks.find((borrow) => borrow.id === account.id && borrow.returned === false)){
     possessedBooks.push(book);
    }
  });

//Loop through the possessedBooks array with the forEach() method
//Use find() method to filter through authors array to check if person.id matches book.authorId using strict equality
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
