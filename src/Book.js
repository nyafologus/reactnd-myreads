import React from 'react'

// As it is a stateless functional Component with only a render method, 
// the render method can be actually omitted and the whole Component 
// can be turned into an ES6 arrow function with an implicit return

const Book = (props) =>

	<div className="book">
	  <div className="book-top">
		{/* // if there is no default book cover, inserts a placeholder thumbnail image of a bear*/}
			<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks ? props.book.imageLinks.thumbnail : `https://placebear.com/g/128/193`})` }}>
		</div>
	    <div className="book-shelf-changer">
	      <select
	      	value = {props.book.shelf}
	      	onChange = {(event) => props.moveShelf(
	      		props.book, event.target.value)}>
	        <option value="move" disabled>Move to...</option>
	        <option value="none">None</option>
	        <option value="currentlyReading">Currently Reading</option>
	        <option value="wantToRead">Want to Read</option>
	        <option value="read">Read</option>
	      </select>
	    </div>
	  </div>
	  <div className="book-title">{props.book.title}</div>
	  <div className="book-authors">{props.book.authors}</div>
	</div>

export default Book