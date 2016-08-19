/* @flow */
'use strict'

import m from 'mithril'

import styles from './game-infobox-styles.sass'

const gameInfoboxComponent = {
  view(vnode: Object) {
    return m(`#game-infobox.${styles.infobox}`, m('p', vnode.attrs.pAttrs, vnode.attrs.pText))
  }
}

export default gameInfoboxComponent
