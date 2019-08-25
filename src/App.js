import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './Bookshelf.js'
import SearchBooks from './SearchBooks.js'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

const books = [
  {title: 'How to eat',
   author: 'Joe Smith',
   category: 'wantToRead',
   cover: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'},
  {title: 'Cozy',
   author: 'Joe Blow',
   category: 'read',
   cover: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'},
  {title: 'Flabergasted',
   author: 'Jane Smith',
   category: 'currentlyReading',
   cover: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'},
  {title: 'Wunna',
   author: 'Bill Boo',
   category: 'read',
   cover: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'},
  {title: 'Jammin',
   author: 'Mike Eff',
   category: 'wantToRead',
   cover: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'},
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
      <div>
          <Route exact path='/' render={() => (
      
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

                  <Link 
                  className="open-search"
                  to="/search">
                    <button />
                  </Link>

              </div>

          )} />

          <Route exact path='/search' render={() => (
             <SearchBooks />
          )} />

          </div>
    );
  }
}

export default BooksApp
