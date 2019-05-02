import React, { Component } from 'react';
import { connect } from 'react-redux'
import Books from './Books'
import { setBooks } from '../store/books/actions'
import { filterBooks } from '../store/filter/actions'
import  orderBy  from 'lodash/orderBy.js'

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'High':
      return orderBy(books, 'price', 'desc')
    case 'Low':
      return orderBy(books, 'price', 'asc')
    case 'Popular':
      return orderBy(books, 'rating', 'desc')
    case 'Author':
      return orderBy(books, 'author', 'asc')
    default: return orderBy(books, 'id', 'asc')
  }
}
class BooksContainer extends Component {
  render() {
    return (
        <Books
          books={this.props.books}
          setBooks={this.props.setBooks}
          isReady={this.props.isReady}
        />
    );
  }
}
const putStateToProps = state => {
  return {
    books: sortBy(state.booksReducers.books,state.booksReducers.filterBy),
    isReady: state.booksReducers.isReady
  }
}
const putDispatchToProps = {
  setBooks: setBooks,
}

export default connect(putStateToProps, putDispatchToProps)(BooksContainer)
