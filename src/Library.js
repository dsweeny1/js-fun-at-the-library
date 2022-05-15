function createLibrary(libraryName) {
   return {
     name: libraryName,
     shelves: {
       fantasy: [],
       fiction: [],
       nonFiction: []
     }
   };
};

function addBook(libraryName, title) {
  if (title.genre === "fantasy") {
    return libraryName.shelves.fantasy.push(title)
  } else if
    (title.genre === "fiction") {
      return libraryName.shelves.fiction.push(title)
    } else if
      (title.genre === "nonFiction") {
        return libraryName.shelves.nonFiction.push(title)
      };
};

function checkoutBook(libraryName, bookTitle, bookGenre) {
  for (i = 0; i < libraryName.shelves[bookGenre].length; i++) {
  if (libraryName.shelves[bookGenre][i].title === bookTitle) {
    libraryName.shelves[bookGenre].splice(i, 1)
    return `You have now checked out ${bookTitle} from the ${libraryName.name}`
  };
};   return `Sorry, there are currently no copies of ${bookTitle} available at the ${libraryName.name}`;
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
