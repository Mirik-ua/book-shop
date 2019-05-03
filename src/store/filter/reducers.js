import { FILTER, SEARCH_QUERY } from './actions'

const initialState = {
  searchQuery: '',
  filterBy: "all"
}

export const filterReducers = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return {
         ...state,
        filterBy: action.payload
      }
    case SEARCH_QUERY:
      return {
         ...state,
        searchQuery: action.payload
      }
  }
  return state
}
