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

// Helper function
function findAccountsByIds(accountIds, accounts) {
  const result = [];

  accountIds.forEach((accountId) => {
    const account = accounts.find((account) => account.id === accountId);
    if (account) {
      result.push(account);
    }
  });

  return result;
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  const accountIds = borrows.map((borrow) => borrow.id);
  const borrowers = findAccountsByIds(accountIds, accounts);
  
  borrowers.forEach((borrower, index) => {
    borrower.returned = borrows[index].returned;
  });

  return borrowers.slice(0, 10); // Return up to 10 borrowers
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
