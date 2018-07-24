import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage.js'
import MainPage from './MainPage.js'

class BooksApp extends React.Component {

state = {
    books: [],
    showSearchPage: true
}

componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
  })
}

render() {
    return (
      <div className="app">
        {this.state.showSearchPage === false && (
          <MainPage
            books={this.state.books}
            onNavigate = {() => ( 
              this.setState({ showSearchPage: true })
              )}
          />
        )}
        {this.state.showSearchPage === true && (
          <SearchPage
            books={this.state.books}
            onNavigate = {() => ( 
              this.setState({ showSearchPage: false })
              )}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
