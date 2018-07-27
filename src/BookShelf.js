import React from 'react'
import Book from './Book.js'

// As it is a stateless functional Component with only a render method, 
// the render method can be actually omitted and the whole Component 
// can be turned into an ES6 arrow function with an implicit return

const BookShelf = (props) =>
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
      	{props.books
      		.filter(book => book.shelf === props.shelf)
      		.map(book =>
            <li key={book.id} >
            	<Book
            		book = {book}
            		moveShelf = {props.moveShelf}
            	/>
            </li>
      		)
      	}
      </ol> 
    </div>
  </div>

export default BookShelf