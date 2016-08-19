/* @flow */
'use strict'

import m from 'mithril'

import styles from './game-styles.sass'

const gameComponent = {
  view(vnode: Object) {
    return m(`#game.${styles.game}`, vnode.children)
  }
}

export default gameComponent
