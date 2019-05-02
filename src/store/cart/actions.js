export const ADD_BOOK_TO_CART = 'ADD_TODO'
export const REMOTE_BOOK_IN_CART = 'REMOTE_BOOK_IN_CART'

export const setBooksToCart = cart => ({
  type: ADD_BOOK_TO_CART,
  payload: cart
})

export const remoteBooksInCart = cart => ({
  type : REMOTE_BOOK_IN_CART,
  payload: cart
})
