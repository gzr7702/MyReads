import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './Bookshelf.js'

const books = [
  {title: 'How to eat',
   author: 'Joe Smith',
   category: 'wantToRead'},
  {title: 'Cozy',
   author: 'Joe Blow',
   category: 'read'},
  {title: 'Flabergasted',
   author: 'Jane Smith',
   category: 'currentlyReading'},
  {title: 'Wunna',
   author: 'Bill Boo',
   category: 'read'},
  {title: 'Jammin',
   author: 'Mike Eff',
   category: 'wantToRead'},
]

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <BookShelf 
          title = 'Currently Reading'
          books={books.filter(
          b => b.category === 'currentlyReading'
        )}/>

        <BookShelf 
          title = 'Want to Read'
         books={books.filter(
          b => b.category === 'wantToRead'
        )}/>

        <BookShelf 
          title = 'Read'
         books={books.filter(
          b => b.category === 'read'
        )}/>

      </div>
    )
  }
}

export default BooksApp
