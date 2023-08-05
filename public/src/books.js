function findAuthorById(authors, id) {
  return author = authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return book = books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOutBooks = books.filter((book) => {
    const [latestTransaction] = book.borrows;
    return !latestTransaction.returned;
  });

  const returnedBooks = books.filter((book) => {
    const [latestTransaction] = book.borrows;
    return latestTransaction.returned;
  });

  return [checkedOutBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  const result = [];

  for (let i = 0; i < borrows.length && result.length < 10; i++) {
    const borrow = borrows[i];
    const account = accounts.find((account) => account.id === borrow.id);
    result.push({ ...account, returned: borrow.returned });
  }

  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
