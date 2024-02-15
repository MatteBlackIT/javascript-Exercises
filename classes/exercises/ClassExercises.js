// Define your Book class here:

class Books{
    constructor(title, author, rDate, ISBN, pages, checkedOut, discarded){
        this.title = title;
        this.author = author;
        this.rDate = rDate; 
        this.ISBN = ISBN;
        this.pages = pages;
        this.checkedOut = checkedOut;
        this.discarded = discarded
    }
    checkedout(uses=1) {
        this.checkedOut += uses;
    }
}

// Define your Manual and Novel classes here:
class Novel extends Books {
    constructor(title, author, rDate, ISBN, pages, checkedOut, discarded){
        super(title, author, rDate, ISBN, pages, checkedOut, discarded);
        if (this.checkedOut > 100) {
            this.discarded = 'Yes'
        }
    }
}

class Manual extends Books {
    constructor(title, author, rDate, ISBN, pages, checkedOut, discarded){
        super(title, author, rDate, ISBN, pages, checkedOut, discarded);
            if (currentYear-this.copyright > 5) {
                this.discarded = 'Yes'
            }
    }
}

// Declare the objects for exercises 2 and 3 here:


let firstBook = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');
let secondBook = new Manual ('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No')


// Code exercises 4 & 5 here:
firstBook.checkedOut(5);
secondBook.discarded();