/* @flow */
'use strict'

import m from 'mithril'

import coinContainer from '../../containers/Coin'

import styles from './menu-styles.sass'

import {
  menuButtonsByRoute
} from '../../helpers/menu-button'

const MenuComponent = {
  view(vnode: Object) {
    return m(`#menu.${styles.menu}`, [
      m(coinContainer, { ...vnode.attrs }),
      m('.buttons', [
        // TODO get buttons by route/menustate
        menuButtonsByRoute(vnode.attrs.dispatch, m.route.get())
      ])
    ])
  }
}

export default MenuComponent
