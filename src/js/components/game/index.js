/* @flow */
'use strict'

import m from 'mithril'

import styles from './game-styles.sass'

const gameComponent = {
  view(vnode: Object) {
    return m(`#game.${styles.game}`, [
      vnode.attrs.coin,
      vnode.attrs.controls
    ])
  }
}

export default gameComponent
