import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

import m from 'mithril'

const middleware = [
  thunkMiddleware,
  createLogger(),
  // mithrilMiddleware
]

const enhancer = applyMiddleware(...middleware)

export function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, enhancer)
  store.subscribe(m.redraw)

  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     store.replaceReducer(require('../reducers').default);
  //   });
  // }

  return store
}
