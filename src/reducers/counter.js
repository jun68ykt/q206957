import { INCREMENT, DECREMENT } from '../actions'

const initialState = {}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        [action.name]: (state[action.name] || 0) + 1
      }
    case DECREMENT:
      return {
        ...state,
        [action.name]: (state[action.name] || 0) - 1
      }
    default:
      return state
  }
}
export default counterReducer
