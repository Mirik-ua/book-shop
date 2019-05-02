import React, { Component } from 'react'
import '../index.css'
import { Nav } from 'react-bootstrap'

export default class Filter extends Component {

  handleItemClick = async event => await this.props.filterBooks(event.target.textContent);


  render() {
    return (
      <Nav variant="pills" defaultActiveKey="/all" className="filterBar">
        <Nav.Item>
          <Nav.Link href="/all" onClick={this.handleItemClick}>All</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Popular" onClick={this.handleItemClick}>Popular</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="High" onClick={this.handleItemClick}>High</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Low" onClick={this.handleItemClick}>Low</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Author" onClick={this.handleItemClick}>Author</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }
}
