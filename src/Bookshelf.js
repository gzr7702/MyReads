import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
     static propTypes = {
         books: PropTypes.object,
         title: PropTypes.string
      }

      state = {
      }

      render() {

        const books = this.props.books;
        const title = this.props.title;

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {books.map((book) => (
                        <li key={book.title}>
                          <Book book={book}/>
                        </li>
                    ))}
                    </ol>
                  </div>
            </div>
        )
    }
}

export default Bookshelf
