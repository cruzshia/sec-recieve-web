import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from '@App/epics'
import rootReducer, { initState } from '@Reducer/index'

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export default function initializeStore(initialState = initState) {
  const epicMiddleware = createEpicMiddleware()

  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([epicMiddleware])
  )

  epicMiddleware.run(rootEpic)
  if (process.browser) window.store = store
  return store
}
