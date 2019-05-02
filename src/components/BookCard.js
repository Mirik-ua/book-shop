import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import '../index.css'

export default class BookCard extends Component{
  render(){
    return(
      <Card>
        <Image src={this.props.image} />
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.author}</span>
          </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='money bill alternate' />
                {this.props.price}
            </a>
          </Card.Content>
      </Card>
    )
  }
}
