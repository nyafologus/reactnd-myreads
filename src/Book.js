import React from 'react'

// As it is a stateless functional Component with only a render method, 
// the render method can be actually omitted and the whole Component 
// can be turned into an ES6 arrow function with an implicit return

const Book = (props) =>
	<div className="book">
	  <div className="book-top">
	    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})`
	    }}>
	  	</div>
	    <div className="book-shelf-changer">
	      <select>
	        <option value="move" disabled>Move to...</option>
	        <option value="currentlyReading">Currently Reading</option>
	        <option value="wantToRead">Want to Read</option>
	        <option value="read">Read</option>
	        <option value="none">None</option>
	      </select>
	    </div>
	  </div>
	  <div className="book-title">{props.book.title}</div>
	  <div className="book-authors">{props.book.authors}</div>
	</div>

export default Book