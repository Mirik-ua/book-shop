import React, { Component } from 'react';
import { connect } from 'react-redux'
import Filter from './Filter'
import { filterBooks } from '../store/filter/actions'

class FilterContainer extends Component {
  render() {
    return (
      <div className="container">
        <Filter
          filterBy={this.props.filterBy}
          filterBooks={this.props.filterBooks}
          books={this.props.books}
        />
      </div>
    );
  }
}
const putStateToProps = state => {
  return {
    filterBy: state.booksReducers.filterBy
  }
}
const putDispatchToProps = {
  filterBooks: filterBooks
}


export default connect(putStateToProps, putDispatchToProps)(FilterContainer)
