import { ADD_BOOKS } from './actions'

const initialState = {
 books : [],
 isReady : false,
}

export const booksReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return {
        ...state,
        books : action.payload,
        isReady: true
      }
  }
  return state
}
