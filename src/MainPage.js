import React, { Component } from 'react'
import BookShelf from './BookShelf.js'
import Book from './Book.js'

class MainPage extends Component {

	// filterShelf = (shelf) => {
 //    this.props.books.filter((book) =>
 //      book.shelf === shelf
 //    )
 //  };

  // filterShelf = (shelf) => 
  // 	{this.props.books.filter(book => book.shelf === shelf)}

	render() {
		return (
			<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          	
          	{/* Shelf that contains all the books the user is currently reading */}
          	<BookShelf
          		shelfTitle="Currently Reading"
		          moveShelf = {this.props.moveShelf}
		          books = {this.props.books}
          		// shelf={this.filterShelf("currentlyReading")}
          		shelf="currentlyReading"
          	/>

            {/* <div className="bookshelf"> */}
            {/*   <h2 className="bookshelf-title">Currently Reading</h2> */}
            {/*   <div className="bookshelf-books"> */}
            {/*     <ol className="books-grid"> */}
            {/*     	{this.props.books */}
            {/*     		// .filter(book => book.shelf === "currentlyReading") */}
            {/*     		.map(book => */}
		          {/*         <li key={book.id} > */}
		          {/*         	<Book */}
		          {/*         		book = {book} */}
		          {/*         		moveShelf = {this.props.moveShelf} */}
		          {/*         		// currentShelf = "currentlyReading" */}
		          {/*         	/> */}
		          {/*         </li> */}
            {/*     		) */}
            {/*     	} */}
            {/*     </ol>  */}
            {/*   </div> */}
            {/* </div> */}

            {/* Shelf that contains all the books the user would like to read */}
            <BookShelf
          		shelfTitle="Want to Read"
		          moveShelf = {this.props.moveShelf}
		          books = {this.props.books}
		          // shelf={this.filterShelf("wantToRead")}
		          shelf="wantToRead"
          	/>

            {/* <div className="bookshelf"> */}
            {/*   <h2 className="bookshelf-title">Want to Read</h2> */}
            {/*   <div className="bookshelf-books"> */}
            {/*     <ol className="books-grid"> */}
            {/*       {this.props.books */}
            {/*     		.filter(book => book.shelf === "wantToRead") */}
            {/*     		.map(book => */}
		          {/*         <li key={book.id} > */}
		          {/*         	<Book */}
		          {/*         		book = {book} */}
		          {/*         		moveShelf = {this.props.moveShelf} */}
		          {/*         		// currentShelf = "wantToRead" */}
		          {/*         	/> */}
		          {/*         </li> */}
            {/*     		) */}
            {/*     	} */}
            {/*     </ol> */}
            {/*   </div> */}
            {/* </div> */}

            {/* Shelf that contains all the books the user has read */}
            <BookShelf
          		shelfTitle="Read"
		          moveShelf = {this.props.moveShelf}
		          books = {this.props.books}
		          // shelf={this.filterShelf("read")}
		          shelf="read"
          	/>

            {/* <div className="bookshelf"> */}
            {/*   <h2 className="bookshelf-title">Read</h2> */}
            {/*   <div className="bookshelf-books"> */}
            {/*     <ol className="books-grid"> */}
            {/*       {this.props.books */}
            {/*     		.filter(book => book.shelf === "read") */}
            {/*     		.map(book => */}
		          {/*         <li key={book.id} > */}
		          {/*         	<Book */}
		          {/*         		book = {book} */}
		          {/*         		moveShelf = {this.props.moveShelf} */}
		          {/*         		// currentShelf = "read" */}
		          {/*         	/> */}
		          {/*         </li> */}
            {/*     		) */}
            {/*     	} */}
            {/*     </ol> */}
            {/*   </div> */}
            {/* </div> */}

          </div>
        </div>
        <div className="open-search">
          <a>Add a book</a>
        </div>
      </div>
		);
	}
}

export default MainPage