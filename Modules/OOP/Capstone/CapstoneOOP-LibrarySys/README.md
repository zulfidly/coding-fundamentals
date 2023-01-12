# Capstone Project: Build a Library System
In this project, you are going to build a Library System. We will have 2 entities, Library and Book.

A Library will have 2 properties and 3 methods:

## Property 1: name (Name of the Library, this property will be received from the parameter of the constructor function)
## Property 2: books (An array of books, this will not be received as parameter, instead initialise together with the name when the Library is created)

## Method 1: addBook (Add a new book to the books array)
## Method 2: getBooks (Get all books' name)
## Method 3: getBooksByCategory (Get all books' name by the category received from the parameter)

## A Book will have 3 properties:
# Property 1: name (Name of the book)
# Property 2: author (Author of the book)
# Property 3: category (Category of the book)





# Here's a starter code to help you get started:

class Library {
  // your code
}

class Book {
  // your code
}

const library = new Library('ABC')

const bookA = new Book('Book A', 'Mr. A', 'Sci-Fi')
const bookB = new Book('Book B', 'Mr. A', 'Sci-Fi')
const bookC = new Book('Book C', 'Mr. B', 'Horror')
library.addBook(bookA)
library.addBook(bookB)
library.addBook(bookC)

const allBooks = library.getBooks()
const horrorBooks = library.getBooksByCategory('Horror')

console.log(allBooks) // ['Book A', 'Book B', 'Book C']
console.log(horrorBooks) // ['Book C']