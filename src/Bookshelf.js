import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
     static propTypes = {
         books: PropTypes.array,
         title: PropTypes.string
      }

      state = {
      }

      render() {
      //console.log("bookshelf: " + JSON.stringify(this.props));

        const books = this.props.books;
        const title = this.props.title;

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                      Object.keys(books).map((bookId) => (
                        <li key={bookId}>
                          <Book book={books[bookId]}/>
                        </li>
                    ))
                    }
                    </ol>
                  </div>
            </div>
        )
    }
}

export default Bookshelf
