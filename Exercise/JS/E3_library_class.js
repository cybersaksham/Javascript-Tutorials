/*
Create a Library class & implement following :
1. getBookList()
2. issuebook(bookname, user)
3. returnBook(bookname)
*/

class Library {
    constructor(books) {
        this.books = books;
        this.issuedBooks=[];
    }
    getBookList() {
        console.log(this.books);
    }
    issueBook(book, name) {
        if (this.issuedBooks.indexOf(book) != -1) {
            console.log(`${book} is already issued to someone.`);
        } else if (this.books.indexOf(book) == -1) {
            console.log(`${book} is not present in library.`);
        } else {
            this.books.splice(this.books.indexOf(book), 1);
            this.issuedBooks.push(book);
            console.log(`${book} has been issued successfully.`);
        }
    }
    returnBook(book) {
        if (this.issuedBooks.indexOf(book) == -1) {
            console.log(`${book} is not issued to anyone.`);
        } else {
            this.issuedBooks.splice(this.issuedBooks.indexOf(book), 1);
            this.books.push(book);
            console.log(`${book} has been returned successfully.`);
        }
    }
}

let lib1 = new Library(["b1", "b2", "b3", "b4", "b5"]);
lib1.getBookList();