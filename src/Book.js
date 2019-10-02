import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Book extends Component {
     static propTypes = {
         book: PropTypes.object,
         onUpdate: PropTypes.func
      }

      state = {
      }

      handleChange = (e) => {
        if (this.props.onUpdate) {
          console.log("value " + e.target.value);
          this.props.onUpdate(this.props.book, e.target.value);
        }
      }

      render() {
        const book = this.props.book;
        //console.log("book props: " + JSON.stringify(book));

        return(
            <div className="book">
                <div className="book-top">
                <a href={book.previewLink}>
                    <div className="book-cover" title={book.description} style={{ width: 128, height: 193, backgroundImage: 
                    'url(' + book.imageLinks.smallThumbnail + ')' }}></div>
                </a>
                <div className="book-shelf-changer">
                    <select value={book.shelf ? book.shelf: 'none'} onChange={this.handleChange}>
                    <option name="move" value="move" disabled>Move to...</option>
                    <option name="currentlyReading" value="currentlyReading">Currently Reading</option>
                    <option name="wantToRead" value="wantToRead">Want to Read</option>
                    <option name="read" value="read">Read</option>
                    <option name="none" value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
)
    }
}

export default Book