/* @flow */
'use strict'

import m from 'mithril'

import coinContainer from '../../containers/Coin'
// import toolbarContainer from '../../containers/Toolbar'
// import singleMenuButton from '../../containers/menuButton'
// import multiMenuButton from '../../containers/Multi-menu-button'

// import buttonsContainer from '../../containers/buttonsContainer'

import {
  menuButtonsByRoute
} from '../../helpers/menu-button'

const MenuComponent = {
  view(vnode: Object) {
    return m('#menu', [
      m(coinContainer),
      m('.buttons', [
        // TODO get buttons by route/menustate
        menuButtonsByRoute()
        // m(MenuButton),
        // m(multiMenuButton)
      ])
    ])
  }
}

export default MenuComponent
