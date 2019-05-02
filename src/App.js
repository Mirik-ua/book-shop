import React, { Component } from 'react';
import { connect } from 'react-redux'
import BooksContainer from './components/BooksContainer'
import { Input, Menu } from 'semantic-ui-react'
import Header from './components/Header'
import FilterContainer from './components/FilterContainer'
import './index.css'
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <FilterContainer />
        <BooksContainer />
      </div>
    );
  }
}
