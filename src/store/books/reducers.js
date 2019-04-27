import { ADD_TODO } from './actions'

const initialState = {
 books : [],
 isReady : false
}

export const booksReducers = (state = initialState, action) => {
  console.log(state,action)
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        books : action.payload,
        isReady: true
      }
  }
  return state
}
