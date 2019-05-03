import { combineReducers } from 'redux'
import { booksReducers } from './books/reducers'
import { cartReducers } from './cart/reducers'
import { filterReducers } from './filter/reducers'

export default combineReducers({
  booksReducers,
  filterReducers,
  cartReducers
})
