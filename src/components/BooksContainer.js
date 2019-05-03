import React, { Component } from 'react';
import { connect } from 'react-redux'
import Books from './Books'
import { setBooks } from '../store/books/actions'
import { filterBooks } from '../store/filter/actions'
import  orderBy  from 'lodash/orderBy.js'

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'All':
      return orderBy(books, 'id', 'asc')
    case 'High':
      return orderBy(books, 'price', 'desc')
    case 'Low':
      return orderBy(books, 'price', 'asc')
    case 'Popular':
      return orderBy(books, 'rating', 'desc')
    case 'Author':
      return orderBy(books, 'author', 'asc')
  }
  return books
};

const findBooks = (books, searchQuery) => books.filter(
      event => event.title.indexOf(searchQuery.toLowerCase()) >= 0 ||
      event.author.indexOf(searchQuery.toLowerCase()) >= 0
  );

const searchBooks = (books ,filterBy, searchQuery) => {
  return sortBy(findBooks(books, searchQuery), filterBy)
};

class BooksContainer extends Component {
  render() {
    return (
      <div>
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
    books:
      state.booksReducers.books &&
      sortBy(searchBooks(
        state.booksReducers.books,
        state.filterReducers.filterBy,
        state.filterReducers.searchQuery
      )
    ),
    isReady: state.booksReducers.isReady
  }
}
const putDispatchToProps = {
  setBooks: setBooks,
}

export default connect(putStateToProps, putDispatchToProps)(BooksContainer)
