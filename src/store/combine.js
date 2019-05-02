import { combineReducers } from 'redux'
import { booksReducers } from './books/reducers'
import { cartReducers } from './cart/reducers'

export default combineReducers({
  booksReducers,
  cartReducers
})
