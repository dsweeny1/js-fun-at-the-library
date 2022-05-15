function shelfBook(book, shelf) {
  if (shelf.length < 3){
    var bookOnShelf = shelf.unshift(book)
    return bookOnShelf
  };
};

function unshelfBook(bookTitle, sciFiShelf) {
  for (var i = 0; i < sciFiShelf.length; i++) {
  if (sciFiShelf[i].title === bookTitle) {
    sciFiShelf.splice(i, 1);
  };
};
};

function listTitles(titles, shelf) {
  var bookTitles = []
  for (var i = 0; i < titles.length; i++) {
  bookTitles.push(titles[i].title)
  console.log(titles[i].title)
};
  return bookTitles.join(", ");
};

function searchShelf(sciFiShelf, bookTitle) {
  var output = false
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (sciFiShelf[i].title === bookTitle) {
      output = true
    };
  };
  return output
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
