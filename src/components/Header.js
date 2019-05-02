import React, { Component } from 'react'
import { Nav, Container } from 'react-bootstrap'
import '../index.css'

export default class Header extends Component {
  render() {
    return (
      <Container className="headerWrapper">
        <Nav variant="pills" className="filterBar">
          <Nav className="justify-content-start">
            <Nav.Item>
              <Nav.Link eventKey="Books-shop">Books-shop</Nav.Link>
            </Nav.Item>
          </Nav>
        </Nav>
        <Nav className="justify-content-center">
          <Nav.Item >
            <Nav.Link eventKey="Total">Total</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Cart">Cart</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    )
  }
}
