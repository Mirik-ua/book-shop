import React, { Component } from 'react';
import { connect } from 'react-redux'
import Filter from './Filter'
import { filterBooks } from '../store/filter/actions'

class FilterContainer extends Component {
  render() {
    return (
        <Filter filterBooks={this.props.filterBooks} />
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
