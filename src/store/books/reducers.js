import { ADD_BOOKS } from './actions'
import { FILTER } from '../filter/actions'

const initialState = {
 books : [],
 isReady : false,
 filterBy: "all"
}

export const booksReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return {
        ...state,
        books : action.payload,
        isReady: true
      }
    case FILTER:
      return {
        ...state,
        filterBy : action.payload,
      }
  }
  return state
}
