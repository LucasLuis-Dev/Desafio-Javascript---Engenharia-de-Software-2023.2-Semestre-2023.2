class Book {
    constructor(title, description, author) {
        this.title = title;
        this.description = description;
        this.author = author;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.ids = 0;
    }

    addBook(bookInfo) {
        const book = new Book(bookInfo.title, bookInfo.description, bookInfo.author);
        book.id = this.ids;
        this.books.push(book);
        this.ids++;
    }

    getBooks(){
        for (let book of this.books) {
            console.log(book)
        }
    }

    removeBookById(id) {
        this.books.splice(id, 1);

        console.log('Livro removido com sucesso!')
    }

    getBookById(id) {
        console.log(this.books[id])

    }

    updateBookById(id,info) {

        let selectedBook = this.books[id];

        if (info.title) {
            selectedBook.title = info.title;
        }

        if (info.description) {
            selectedBook.description = info.description;
        }

        if (info.author) {
            selectedBook.author = info.author;
        }
        console.log("Livro Atualizado com Sucesso!")
    }
}

const library = new Library()
library.addBook({title: 'Branca de Neve', description: 'Era uma vez...', author: 'Lucas'})
library.addBook({title: 'Rapunzel', description: 'Era uma vez...', author: 'Lucas'})
library.addBook({title: 'A historia de Merida', description: 'Era uma vez...', author: 'Lucas'})
library.getBooks()
library.getBookById(2)
library.removeBookById(1)
library.getBooks()
library.updateBookById(1, {description: 'Ventos frios me chamando pelo céu azul brilhar...'})
library.getBooks()