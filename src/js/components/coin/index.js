/* @flow */
'use strict'

import m from 'mithril'

import styles from './coin-styles.scss'

import ring from '../../../images/ring.png'
import front from '../../../images/thumb-front.png'
import back from '../../../images/thumb-back.png'

const coinComponent = {
  view(vnode: Object) {
    return m('.coin.main.logo', vnode.attrs.logoAttrs, [
      m(`.${styles.coin}`, vnode.attrs.coinAttrs, [
        m('.front', [
          m('img', { src: ring }),
          m('img', { src: front }),
          vnode.attrs.frontCoinOverlay
        ]),
        m('.back', [
          m('img', { src: ring }),
          m('img', { src: back }),
          vnode.attrs.backCoinOverlay
        ])
      ])
    ])
  }
}

export default coinComponent
