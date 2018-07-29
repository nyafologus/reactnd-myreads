import React from 'react'
import PropTypes from 'prop-types'
import MatchShelf from './MatchShelf'

// As it is a stateless functional Component with only a render method, 
// the render method can be actually omitted and the whole Component 
// can be turned into an ES6 arrow function with an implicit return


const Book = (props) =>
	<div className="book">
	  <div className="book-top">
			{/* // if there is no default book cover, inserts a placeholder thumbnail image of a bear*/}
			<div className="book-cover" style={
				{ width: 128,
					height: 193, 
					backgroundImage: `url(${props.book.imageLinks ? props.book.imageLinks.thumbnail : `https://placebear.com/g/128/193`})` 
					}
				}>
		</div>
	  <div className="book-shelf-changer">
	  	<MatchShelf
	      book={props.book}
	      books={props.books}
	      moveShelf={props.moveShelf}
	    />
	  </div>
	  </div>
	  <div className="book-title">{props.book.title}</div>
	  <div className="book-authors">{props.book.authors}</div>
	</div>

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  moveShelf: PropTypes.func.isRequired
}

export default Book