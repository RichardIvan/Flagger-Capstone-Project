/* @flow */
'use strict'

import m from 'mithril'

import coinContainer from '../../containers/Coin'
import toolbarContainer from '../../containers/Toolbar'
import singleMenuButton from '../../containers/Single-menu-button'
import multiMenuButton from '../../containers/Multi-menu-button'

const MenuComponent = {
  view(vnode: Object) {
    return m('#menu', [
      m(toolbarContainer),
      m(coinContainer),
      m('.buttons', [
        console.log(vnode),
        console.dir(m.route.get('route')),
        console.log(vnode.attrs.route),
        // TODO get buttons by route/menustate
        // getButtonsByRoute(vnode.attrs.store.getState)
        m(singleMenuButton),
        m(multiMenuButton)
      ])
    ])
  }
}

export default MenuComponent
