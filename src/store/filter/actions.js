export const FILTER = 'FILTER'
export const SEARCH_QUERY = "SEARCH_QUERY"

export const filterBooks = filterBy => ({
  type: FILTER,
  payload: filterBy
})
export const setSearchQuery = searchQuery => ({
  type: SEARCH_QUERY,
  payload: searchQuery
})
