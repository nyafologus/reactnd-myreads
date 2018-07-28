import React, { Component } from 'react'

class ShelfChanger extends Component {

  render() {

    let shelf;

    for(let theBook of this.props.books) {
      if(theBook.id === this.props.book.id) {
        shelf = theBook.shelf
        break
      }
    }

    return (
      <select 
        defaultValue={shelf}
        onChange={(e) => this.props.moveShelf(this.props.book, e.target.value)}>
        <option value='move' disabled>move to...</option>
        <option value='none'>None</option>
        <option value='currentlyReading' >Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
      </select>
    )
  }
}

export default ShelfChanger