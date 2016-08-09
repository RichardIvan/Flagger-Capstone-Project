/* @flow */
'use strict'

import m from 'mithril'

import styles from './coin-styles.scss'

const coinComponent = {
  view(vnode: Object) {
    return m('#coin.main.logo', vnode.attrs.logoAttrs, [
      m(`.${styles.coin}`, vnode.attrs.coinAttrs, [
        m('.front', [
          vnode.attrs.ring,
          vnode.attrs.front
        ]),
        m('.back', [
          vnode.attrs.ring,
          vnode.attrs.back
        ])
      ])
    ])
  }
}

export default coinComponent
