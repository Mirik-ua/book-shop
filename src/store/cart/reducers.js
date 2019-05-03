import { ADD_BOOK_TO_CART, REMOTE_BOOK_IN_CART } from './actions'

const initialState = {
 cart: []
}

export const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_TO_CART:
      return {
        ...state,
        cart : [
          ...state.cart,
          action.payload
        ]
      }
      case REMOTE_BOOK_IN_CART:
      return {
        ...state,
        cart : state.cart.filter( o => o.id != action.payload)
      }
  }
  return state
}
