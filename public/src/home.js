function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.reduce((count, account) => count + 1, 0);
}

function getBooksBorrowedCount(books) {
  let borrowedTotal = 0;

  books.forEach(book => {
    if (!book.borrows[0].returned) {
      borrowedTotal++;
    }
  });
  return borrowedTotal;
}

function getMostCommonGenres(books) {
  const genresCount = {};

  books.forEach((book) => {
    const { genre } = book;
    if (genresCount[genre]) {
      genresCount[genre]++;
    } else {
      genresCount[genre] = 1;
    }
  });

  const sortedGenres = Object.keys(genresCount).sort((a, b) => genresCount[b] - genresCount[a]);

  return sortedGenres.slice(0, 5).map((genre) => ({ name: genre, count: genresCount[genre] }));
}


function getMostPopularBooks(books) {
  const booksCount = {};

  books.forEach((book) => {
    const { title, borrows } = book;
    booksCount[title] = borrows.length;
  });

  const sortedBooks = Object.keys(booksCount).sort((a, b) => booksCount[b] - booksCount[a]);

  return sortedBooks.slice(0, 5).map((title) => ({ name: title, count: booksCount[title] }));
}

function getMostPopularAuthors(books, authors) {
  const authorBorrowCount = {};

  books.forEach((book) => {
    const { authorId, borrows } = book;
    const author = authors.find((author) => author.id === authorId);

    if (author) {
      const authorName = `${author.name.first} ${author.name.last}`;
      if (authorBorrowCount[authorName]) {
        authorBorrowCount[authorName] += borrows.length;
      } else {
        authorBorrowCount[authorName] = borrows.length;
      }
    }
  });

  const sortedAuthors = Object.keys(authorBorrowCount).sort((a, b) => authorBorrowCount[b] - authorBorrowCount[a]);

  return sortedAuthors.slice(0, 5).map((authorName) => ({ name: authorName, count: authorBorrowCount[authorName] }));
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
