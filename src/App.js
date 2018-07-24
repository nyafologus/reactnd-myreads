import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage.js'
import MainPage from './MainPage.js'

class BooksApp extends React.Component {

state = {
    books: [],
    screen: 'search'
}

componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
  })
}

render() {
    return (
      <div className="app">
        {this.state.screen === 'main' && (
          <MainPage
            books={this.state.books}
          />
        )}
        {this.state.screen === 'search' && (
          <SearchPage
            books={this.state.books}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
