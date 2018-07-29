import React, { Component } from 'react'
import { Link } from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import Book from './Book.js'


class SearchPage extends Component {

	state = {
		query: "",
		listedBooks: []
	}

	updateQuery = (query) => {
		this.setState({query})
		this.listBooks(query);
	}

	listBooks = (query) => {
		if (query) {
			BooksAPI.search(query).then((listedBooks) => {
				if (listedBooks.error) {
					this.setState({ listedBooks: [] })
				} else {
			this.setState({ listedBooks })
			}})
		} else {
		this.setState({ listedBooks: [] })
		}
	}

	render() {

		return (
			<div className="search-books">
    		<div className="search-books-bar">
        	<Link className="close-search" to="/">Close</Link>
        	<div className="search-books-input-wrapper">
         	 	<input 
         	 		type="text" 
         	 		placeholder="Search by title or author"
         	 		value={this.state.query}
         	 		onChange={(event) => this.updateQuery(event.target.value)}
         	 	/>
					</div>
      	</div>
        <div className="search-books-results">
        	<ol className="books-grid">
        		{this.state.listedBooks.map(book =>
		          <li key={book.id} >
	            	<Book
	            		book = {book}
	            		books = {this.props.books}
	            		moveShelf = {this.props.moveShelf}
	            	/>
		            </li>
		      		)
		      	}
          </ol>
        </div>
      </div>
		);
	}
}

SearchPage.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  moveShelf: PropTypes.func.isRequired
}

export default SearchPage