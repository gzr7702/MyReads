import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './Bookshelf.js'

class SearchBooks extends Component {

    static propTypes = {
      books: PropTypes.array
    }

    state = {
      query: '',
    }

    handleChange = (e) => {
      e.preventDefault();
      this.setState({ query: e.target.value });
      if (this.props.onSearchBooks && this.state.query !== "") {
        this.props.onSearchBooks(this.state.query);
      }
    }

    render(){
        const { query } = this.state;
        const { books } = this.props;

        console.log(JSON.stringify(books))
        const listItems = books.map((book) => <li>{book.title}</li>);
        //const listItems = []

        return(
            <div className="search-books">
            <div className="search-books-bar">
               <Link 
                  className="close-search"
                  to="/">
                  </Link>

              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"
                name="query"
                value={ query }
                onChange={ this.handleChange }
                />

              </div>
            </div>
            <div className="search-books-results">
              <BookShelf 
                    title = 'Currently Reading'
                    //books={this.state.books.filter(
                      //b => b.shelf === 'wantToRead'
                    //)}
                    //for now, we ignore book shelves and render all matches
                    books={books}
                  />
            </div>

          </div>
        )
    }
}

export default SearchBooks