function createTitle(title) {
return "The " + title
}

function buildMainCharacter(name, age, pronouns) {
  return {
      name: name,
      age: age,
      pronouns: pronouns
  }
}

function saveReview(review, list) {
  if (list.includes(review)) {
  return
  } else {
  return (list.push(review))
  }
}

function calculatePageCount(bookPageCount) {
  return bookPageCount.length * 20
}

function writeBook(bookTitle, mainCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
}

function editBook(bookTitle) {
  bookTitle.pageCount = bookTitle.pageCount * .75
  return bookTitle.pageCount
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
