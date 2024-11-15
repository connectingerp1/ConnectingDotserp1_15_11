import { SET_CITY } from '../actions/types'

const initialState = {
  city: 'Pune', // Default city
}

export const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return { ...state, city: action.payload }
    default:
      return state
  }
}
