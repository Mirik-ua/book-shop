import React, { Component } from 'react';
import { connect } from 'react-redux'
import Books from './Books'
import {setBooks} from '../store/books/actions'

class BooksContainer extends Component {
  render() {
    return (
      <div className="container">
        <Books
          books={this.props.books}
          setBooks={this.props.setBooks}
          isReady={this.props.isReady}
        />
      </div>
    );
  }
}
const putStateToProps = state => {
  return {
    books: state.booksReducers.books,
    isReady: state.booksReducers.isReady
  }
}
const putDispatchToProps = {
  setBooks: setBooks
}


export default connect(putStateToProps, putDispatchToProps)(BooksContainer)
