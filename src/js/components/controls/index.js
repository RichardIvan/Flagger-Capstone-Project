/* @flow */
'use strict'

import m from 'mithril'

import styles from './controls-styles.sass'

const controlsComponent = {
  view(vnode: Object) {
    return m('#controls', m('ul', [
      vnode.attrs.buttons.map((button, index) => m('li', button))
    ]))
  }
}

export default controlsComponent
