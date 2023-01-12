const prompt = require("prompt-sync")();

class Library {
    constructor(libName) {
        this.libName = libName;
        this.bookList = []
    }
    addBook(s) {
        (this.bookList).push(s)
        return this
    }
    getBooks() {
        console.log("---getting all books----------------------------------------------")
        let x = library.bookList
        x.forEach((q,ind) => {
            console.log(`Index[${ind}] Title:${q.TITLE}, Author:${q.AUTHOR}, Category:${q.CATEGORY}`)
        })
    }
    getBooksByCategory(ctgry) {
        console.log("---searching books by category------------------------------------")
        let x = library.bookList
        x.forEach((q,ind) => {
            if(q.CATEGORY == ctgry) {
                console.log(`Index[${ind}] Title:${q.TITLE}, Author:${q.AUTHOR}, Category:${q.CATEGORY}`)
            }
        })
    }

  }
  
  class Book {
    constructor(title, author, category) {
        this.TITLE = title;
        this.AUTHOR = author;
        this.CATEGORY = category;
    }

}
const library = new Library('myLibrary')

const bookA = new Book('Book A', 'Mr. A', 'Sci-Fi')
const bookB = new Book('Book B', 'Mr. B', 'Comedy')
const bookC = new Book('Book C', 'Mr. C', 'Horror')
const bookD = new Book('Book D', 'Mr. D', 'Horror')
library.addBook(bookA)
library.addBook(bookB)
library.addBook(bookC)
library.addBook(bookD)

const allBooks = library.getBooks()
allBooks;

const horrorBooks = library.getBooksByCategory('Horror')
horrorBooks;

console.log("END*******************************************")
// console.log(library)
// console.log(library.libName)
// console.log(library.bookList[1])
  
















