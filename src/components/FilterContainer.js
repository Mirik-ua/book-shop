import React, { Component } from 'react';
import { connect } from 'react-redux'
import Filter from './Filter'
import { filterBooks, setSearchQuery } from '../store/filter/actions'

class FilterContainer extends Component {
  render() {
    return (
        <Filter
          filterBooks={this.props.filterBooks}
          searchQuery={this.props.searchQuery}
          setSearchQuery={this.props.setSearchQuery}
        />
    );
  }
}
const putStateToProps = state => {
  return {
    filterBy: state.filterReducers.filterBy,
    searchQuery: state.filterReducers.searchQuery
  }
}
const putDispatchToProps = {
  filterBooks,
  setSearchQuery
}

export default connect(putStateToProps, putDispatchToProps)(FilterContainer)
