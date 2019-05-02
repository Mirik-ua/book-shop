export const FILTER = 'FILTER'

export const filterBooks = filterBy => ({
  type: FILTER,
  payload: filterBy
})
