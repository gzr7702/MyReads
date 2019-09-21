import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './Bookshelf.js'
import SearchBooks from './SearchBooks.js'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      //console.log("app books: " + JSON.stringify(books))
      this.setState({ books })
    });
  }

  searchBooks = (query) => {
    BooksAPI.search(query)
      .then(data => {
        if (data && data.length > 0) {
          this.setState({
            books: data
          })
        }
      })
      .catch(console.error("Could not fetch any books"));
  }

  render() {
    //console.log("app props " + this.props);
    return (
      <div>
        <Route exact path='/' render={() => (
    
          <div className="app">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

              <BookShelf 
                title = 'Currently Reading'
                books={this.state.books.filter(
                b => b.shelf === 'currentlyReading'
              )}
              />

              <BookShelf 
                title = 'Want to Read'
                books={this.state.books.filter(
                b => b.shelf === 'wantToRead'
              )}/>

              <BookShelf 
                title = 'Read'
                books={this.state.books.filter(
                b => b.shelf === 'read'
              )}/>

              <Link 
              className="open-search"
              to="/search">
                <button />
              </Link>

          </div>

        )} />

        <Route exact path='/search' render={() => (
            <SearchBooks 
            books={ this.state.books }
            onSearchBooks={(book) => {
              this.searchBooks(book)
            }}
            />
        )} />

        </div>
    );
  }
}

export default BooksApp
