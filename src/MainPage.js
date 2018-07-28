import React, { Component } from 'react'
import { Link } from "react-router-dom"
import BookShelf from './BookShelf.js'
// import Book from './Book.js'

class MainPage extends Component {

	render() {
		return (
			<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          	
          	{/* BookShelf Component that contains all the books the user is currently reading */}
          	<BookShelf
          		shelfTitle="Currently Reading"
          		shelf="currentlyReading"
		          books = {this.props.books}
		          moveShelf = {this.props.moveShelf}
          	/>

            {/* BookShelf Component that contains all the books the user would like to read */}
            <BookShelf
          		shelfTitle="Want to Read"
		          shelf="wantToRead"
		          books = {this.props.books}
		          moveShelf = {this.props.moveShelf}
          	/>

            {/* BookShelf Component that contains all the books the user has read */}
            <BookShelf
          		shelfTitle="Read"
		          shelf="read"
		          books = {this.props.books}
		          moveShelf = {this.props.moveShelf}
          	/>

          </div>
        </div>
        <div className="open-search">
        	<Link to="/search">Add a book</Link>
        </div>
      </div>
		);
	}
}

export default MainPage