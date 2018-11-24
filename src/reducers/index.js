import { combineReducers } from 'redux'


const defaultState = {
  tests: [],
  filterId: 0
}

const filterId = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER_ACTION':
      return {
        ...state,
        filterId: action.filterId
      }
    default:
      return state
  }
}

const tests = (state = defaultState, action) => {
  return state
}

const rootReducer = combineReducers({
  filterId,
  tests
})

export default rootReducer