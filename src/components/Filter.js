import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { Grid , Input } from 'semantic-ui-react'
import '../index.css'

export default class Filter extends Component {

  handleItemClick = async event => {
    await this.props.filterBooks(event.target.textContent);
  }
  handleChange = event => {
    this.props.setSearchQuery(event.target.value)
  }

  render() {
    return (
      <Nav variant="pills" defaultActiveKey="/All" className="filterBar">
        <Nav.Item>
          <Nav.Link href="/All" onClick={this.handleItemClick}>All</Nav.Link>
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
          <Grid>
            <Grid.Column width={6}>
              <Input
                icon="search"
                placeholder="Search..."
                value={this.props.searchQuery}
                onChange={this.handleChange}
              />
            </Grid.Column>
          </Grid>
      </Nav>
    )
  }
}
