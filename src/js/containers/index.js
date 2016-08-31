
import m from 'mithril'

import { configureStore } from '../store'
import { startResponsiveStateService } from '../services/mobile-state'

import { attachStoreToComponent } from '../helpers/application'
import { setupKeyBoardControls } from '../services/keyboard-controls'

// import 'normalize-css'
import '../../css/global-styles.scss'
import '../../css/initial-load-styles.scss'
import '../../fonts/PressStart2P-Regular.ttf'

import Root from './Root'

/**
 * Calling this method initializes Redux Store
 * @param takes in initial state of the store
 * @return returns a store instance with mithril subscribed to store changes
 */
const store = configureStore()

/**
 * startResponsiveStateService starts a onwindow resize listener that is setting
 * the current responsive state of the application. Options are mobile/desktop
 */
startResponsiveStateService()
setupKeyBoardControls(store)

export function mountRoot (el, attrs) {
  const mount = (Component) => m.mount(el, Component, { ...attrs })

  // if (module.hot) {
  //   console.log('module is hot')
  //   module.hot.accept('./Root', () => {
  //     mount(require('./Root').default)
  //   })
  // }

  mount(Root)
}

export function mountRoute (el) {
  const mount = (Component) => m.route(el, '/menu', {
    '/:route...': attachStoreToComponent(Component, store),
    // '/playing/:route': attachStoreToComponent(Component, store),
    // '/menu/new-game': attachStoreToComponent(Component, store)
  })

  mount(Root)
}
