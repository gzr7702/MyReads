import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book.js'

// TODO 1: fix books do not apear on proper bookshelf when updated
// TODO 2: handle invalid queries
// TODO 3: account for books with no images

class SearchBooks extends Component {

    static propTypes = {
      searchResults: PropTypes.array,
      onSearchBooks: PropTypes.func
    }

    state = {
      query: '',
    }

    componentDidMount() {
      this.setState({ searchResults: [] });
    }

    handleChange = (e) => {
      e.preventDefault();
      this.setState({ query: e.target.value });
      if (this.props.onSearchBooks && this.state.query !== "") {
        //console.log(this.state.query)
        this.props.onSearchBooks(this.state.query)
      }
    }

    render(){
        const { query } = this.state;
        const { onUpdate, searchResults } = this.props;


        return(
            <div className="search-books">
            <div className="search-books-bar">
               <Link 
                  className="close-search"
                  to="/">
                  </Link>

              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                name="query"
                value={ query }
                onChange={ this.handleChange }
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                { searchResults &&
                  Object.keys(searchResults).map(bookId => (
                    <li key={bookId}>
                      <Book 
                      book={searchResults[bookId]}
                      onUpdate={onUpdate}
                      />
                    </li>
                  ))
                }

              </ol>
            </div>

          </div>
        )
    }
}

export default SearchBooks