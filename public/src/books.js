//Use find() method on authors array 
//Provide callback function on find() method to search authors array to check if author.id equals id parameter through strict equality
const findAuthorById = (authors, id) => {
  return authors.find((author) => author.id === id);
}

//Use find() method on books array
//Provide callback function on find() method to search books array to check if book.id equals id parameter through strict equality 
const findBookById = (books, id) => {
  return books.find((book) => book.id === id);
}

//Declare a variable to hold value of an array that contains books that are currently checked out
//Use filter() method on books array to determine which books meet the condition of still being checked out
//Use some() method on borrows array to determine if at least one copy of a book has still not been returned
const partitionBooksByBorrowedStatus = (books) => {
  let checkedOutBooks = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false));
          
//Declare a variable to hold value of an array that contains books that have been returned
//Use filter() method on books array to determine which books meet the condition of being returned
//Use every() method on borrows array to determine if all copies of a book have been returned
  let returnedBooks = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true));
  
//Use the spread operator to combine the arrays inside of checkOutBooks and inside of returnedBooks
  let result = [[...checkedOutBooks], [...returnedBooks]];
  return result;
}

//Use map() method on borrows array of book object to create new array
//Use find() method on accounts array within the map() method to find account where account.id matches borrow.id through strict equality
//Return the output values using the spread operator for both borrow and account variables
//Use slice() method to limit output array to only to 10 or fewer account objects
const getBorrowersForBook = (book, accounts) => {
  let result = book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return { ...borrow, ...account };
  }).slice(0,10);
  
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
