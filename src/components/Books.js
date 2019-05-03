import React, { Component } from 'react';
import axios from 'axios'
import { Card, Icon, Image } from 'semantic-ui-react'
import BookCard from './BookCard'

export default class Books extends Component {

  componentDidMount(){
    axios.get('/books.json').then( ( res ) => {
      this.props.setBooks( res.data )
    })
  }

  render() {
    return (
      <div className="container">
        <Card.Group itemsPerRow={4} className='containerPringBooks'>
          {
            !this.props.isReady ? <h4>loading...</h4> :
            this.props.books.map( (book, index) => {
              return(
                <BookCard key={index} {...book}/>
              )
            })
          }
        </Card.Group>
      </div>
    );
  }
}
