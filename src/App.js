import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage.js'
import MainPage from './MainPage.js'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
          {/* <MainPage */}
          {/*   books = {this.state.books} */}
          {/*   moveShelf = {this.moveShelf} */}
          {/* /> */}
          <SearchPage/>
      </div>
    )
  }
}

export default BooksApp