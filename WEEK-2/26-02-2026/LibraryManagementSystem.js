/**
 * LibraryManagementSystem.js
 * ---------------------------
 * Demonstrates Object-Oriented Programming in JavaScript
 * using a Book class with methods for borrowing, returning,
 * and inspecting books.
 *
 * Concepts: ES6 Classes, Instance Methods, Array of Objects
 */

class Book {
    // ─── Instance Properties ─────────────────────────────────
    title;
    author;
    pages;
    isAvailable = true; // All books are available by default

    /**
     * Creates a new Book instance.
     * @param {string} title  - Title of the book.
     * @param {string} author - Author name.
     * @param {number} pages  - Total page count.
     */
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    /** Marks the book as borrowed (unavailable). */
    borrow() {
        this.isAvailable = false;
        return this.isAvailable;
    }

    /** Marks the book as returned (available). */
    returnBook() {
        this.isAvailable = true;
        return this.isAvailable;
    }

    /** Returns a formatted string describing the book. */
    getInfo() {
        return `${this.title} by ${this.author} (${this.pages} pages)`;
    }

    /** Checks whether the book has more than 300 pages. */
    isLongBook() {
        return this.pages > 300;
    }
}

// ─── Create Book Instances ───────────────────────────────────
let book1 = new Book("Python", "Reema Thareja", 350);
let book2 = new Book("Java",   "Ramesh",        500);
let book3 = new Book("DBMS",   "Suresh",        200);
let book4 = new Book("WT",     "Raju",          700);
let book5 = new Book("FCA",    "Harry",         650);

// Store all books in an array
let books = [book1, book2, book3, book4, book5];

// ─── Display Info of All Books ───────────────────────────────
console.log("List of all books:");
books.forEach(book => console.log(book.getInfo()));

// ─── Borrow 2 Books and Show Availability ────────────────────
console.log("\nBorrowing Python:", book1.borrow());   // false
console.log("Borrowing DBMS:",   book3.borrow());     // false

// ─── Return a Book and Print Updated Status ──────────────────
console.log("\nReturning Python:", book1.returnBook()); // true

// ─── Count Long Books ( > 300 pages) ─────────────────────────
let count = 0;
for (let v in books) {
    if (books[v].isLongBook()) count++;
}
console.log("\nNumber of Long Books:", count);

// ─── Display All Currently Available Books ───────────────────
console.log("\nAvailable books:");
for (let i in books) {
    if (books[i].isAvailable === true)
        console.log(books[i]);
}