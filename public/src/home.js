const getTotalBooksCount= (books) => {
  return books.length;
}

const getTotalAccountsCount = (accounts) => {
  return accounts.length;
}

const getBooksBorrowedCount = (books) => {
  let checkedOutBooks = books.filter((book) => book.borrows.filter((record) => record.returned === false).length > 0);
  return checkedOutBooks.length;
}

const getMostCommonGenres = (books) => {
  let commonGenre = {}; 
  books.forEach((book) => {
    if(commonGenre[book.genre]){
      commonGenre[book.genre] ++;
    } else{
      commonGenre[book.genre] = 1;
    }
  });
  
  let bookEntries = Object.entries(commonGenre).map(([name, count]) => {
    return {name, count};
  });
  
  return bookEntries.sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5);
}

const getMostPopularBooks = (books) => {
  return books.map((book) => {
    return {name: book.title, count: book.borrows.length};
  }).sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1).slice(0,5);
}

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
