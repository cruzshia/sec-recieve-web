import { Action } from 'redux'

// REDUCERS
export const appDefaultReducer = {
  lastUpdate: 0,
  light: false,
  count: 0
}

const appReducer = (state = appDefaultReducer, action: Action<any>) => {
  switch (action.type) {
    default:
      return state
  }
}

export default appReducer
