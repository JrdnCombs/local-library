function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
return(accounts);
}

// Declaring function with parameters account and books
function getTotalNumberOfBorrows(account, books) {
  // Initialize a counter to keep track of the number of borrows
  totalBorrows = 0;
  // Loop through all the books and set book to hold current object from books
  for (const book of books) {
    // Check if the account's ID appears in the borrows array of the current book object
    // Sets borrows to hold borrows array from current book object
    const borrows = book.borrows;
    // Loop through current book.borrows object and set borrow to hold book.borrows
    for (const borrow of borrows) {
      if (borrow.id === account.id) {
        // Increment the counter if the account's ID matches
        totalBorrows++;
      }
    }
  }
  // Return the total number of borrows for the account
  return totalBorrows
}

function getBooksPossessedByAccount(account, books, authors) {
  const checkedOutBooks = books.filter(book => {
    const lastBorrow = book.borrows[0];
    return !lastBorrow.returned && lastBorrow.id === account.id;
  });

  checkedOutBooks.forEach(book => {
    const author = authors.find(author => author.id === book.authorId)
    book.author = author;
  });

  return checkedOutBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
