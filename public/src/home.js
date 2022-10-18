//Use .length on books array to get total number of book objects within books array
function totalBooks(books){
  return books.length;
}

const getTotalBooksCount= (books) => {
  return totalBooks(books);
}

//Use .length on accounts array to get total number of account objects within accounts array
const getTotalAccountsCount = (accounts) => {
  return accounts.length;
}

//Declare variable that stores value of books that are currently checked out
//Use filter() method on books array to determine which books meet condition of still being checked out
//Use filter() method on borrows array of book object that checks if the book is not returned by using strict equality
//Return the length of the array that contains the books that are not returned if the amount is greater than 0
const getBooksBorrowedCount = (books) => {
  let checkedOutBooks = books.filter((book) => book.borrows.filter((bookStatus) => bookStatus.returned === false).length > 0);
  return checkedOutBooks.length;
}

//Use forEach() method to loop through books array to count amount of times that a genre shows up
//If the genre of a book is present, add 1 to the count key associated with the name key of that genre
//If the genre of a book is not present, set the count key to 1 for that that genre name
const getMostCommonGenres = (books) => {
  let commonGenre = {}; 
  books.forEach((book) => {
    if(commonGenre[book.genre]){
      commonGenre[book.genre] ++;
    } else{
      commonGenre[book.genre] = 1;
    }
  });
  
//Use Object.entries to return array with both name and count keys with the values associated to each key 
  let bookEntries = Object.entries(commonGenre).map(([name, count]) => {
    return {name, count};
  });

//Use sort() method to arrange genres from most commmon to least common
//use slice() method to limit output array to 5 or less objects
  return bookEntries.sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5);
}

//Use map() method on books array to create new array that contains books with most borrows
//Return objects within array that contain name key with title of book as value and count key with amount of times the book has been borrowed as value
//Use sort() method to arrange the values of count key from greatest to lowest
//Use slice() method to limit output array to 5 or less objects
const getMostPopularBooks = (books) => {
  return books.map((book) => {
    return {name: book.title, count: book.borrows.length};
  }).sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1).slice(0,5);
}

//Declare variable to hold value of empty array for popular authors
//Use forEach() method to loop through authors array 
//Use forEach() method to loop through books array to compare book.authorId with author.id by using strict equality
//If condition is met, add the amount of times the book has been borrowed into the value of the count key for that specific author
//Push the authorInfo object into the popularAuthors array
const getMostPopularAuthors = (books, authors) => {
  let popularAuthors = [];
  
  authors.forEach((author) => {
    let authorInfo = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    books.forEach((book) => {
      if(book.authorId === author.id){
        authorInfo.count += book.borrows.length;
      }
    });
    popularAuthors.push(authorInfo);
  })
//Use sort() method on popularAuthors array to arrange authors by the amount of times the author's books have been borrowed from greatest to lowest
//Use slice() method to limit output array to 5 or less objects
  
  return popularAuthors.sort((authorA, authorB) => authorB.count - authorA.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
