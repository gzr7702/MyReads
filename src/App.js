import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './Bookshelf.js'
import SearchBooks from './SearchBooks.js'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: [],
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  }

  updateShelf = (book, shelf) => {
    this.setState((prevState) => ({
      books: prevState.books.map((b) => {
        let newBook = b;

        if (b.id === book.id) {
          newBook.shelf = shelf;
          BooksAPI.update(newBook, shelf);
        }

        return newBook
      })
    }))

  }

  searchBooks = (query) => {
    BooksAPI.search(query)
      .then(data => {
        if (data && data.length > 0) {
          this.setState({
            searchResults : data
          })
        }
      })
      .catch(console.error("Could not fetch any books"));
  }

  render() {
    //console.log("app props " + this.props);
    const { books } = this.state;

    return (

      <div>
        <Route exact path='/' render={() => (
    
          <div className="app">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

              <BookShelf 
                title = 'Currently Reading'
                books={books.filter(
                b => b.shelf === 'currentlyReading'
                )}
                onUpdate={this.updateShelf}
              />

              <BookShelf 
                title = 'Want to Read'
                books={books.filter(
                b => b.shelf === 'wantToRead'
                )}
                onUpdate={this.updateShelf}
              />

              <BookShelf 
                title = 'Read'
                books={books.filter(
                b => b.shelf === 'read'
                )}
                onUpdate={this.updateShelf}
              />

              <Link 
              className="open-search"
              to="/search">
                <button />
              </Link>

          </div>

        )} />

        <Route exact path='/search' render={() => (
            <SearchBooks 
            onSearchBooks={(book) => {
              this.searchBooks(book)
            }}
            onUpdate={this.updateShelf}
            searchResults={this.state.searchResults}
            />
        )} />

        </div>
    );
  }
}

export default BooksApp
