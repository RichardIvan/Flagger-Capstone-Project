/* @flow */
'use strict'

import m from 'mithril'

import coinContainer from '../../containers/Coin'

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
      ])
    ])
  }
}

export default MenuComponent
