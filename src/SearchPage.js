import React, { Component } from 'react'

// TODO: inserting the first part of the ternary operator that refers to the SearchPage

class SearchPage extends React.Component {
	render() {
		return (
			<div className="search-books">
    		<div className="search-books-bar">
        	<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
        	<div className="search-books-input-wrapper">
         		{}
         	 	<input type="text" placeholder="Search by title or author"/>
					</div>
      	</div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
		)
	}
}

export default SearchPage