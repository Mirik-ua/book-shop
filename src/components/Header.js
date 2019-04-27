import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import '../index.css'

export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name='Books-shop'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='total'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          ></Menu.Item>
          <Menu.Item
            name='cart'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}
