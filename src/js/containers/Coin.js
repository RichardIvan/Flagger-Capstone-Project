/* @flow */
'use strict'

import m from 'mithril'

import coinComponent from '../components/coin'

import {
  getCurrentCoinPosition
} from '../selectors'

import ring from '../../images/ring.png'
import front from '../../images/thumb-front.png'
import back from '../../images/thumb-back.png'

// import back from

const CoinContainer = {
  isFront: true,
  view(vnode: Object) {
    return m(coinComponent, {
      ring: m('img', { src: ring }),
      front: m('img', { src: front }),
      back: m('img', { src: back }),
      logoAttrs: {
        onclick: function() {
          vnode.state.isFront = !vnode.state.isFront
        },
      },
      coinAttrs: {
        class: [getCurrentCoinPosition(vnode.attrs.store), this.isFront ? '' : 'flipped'].join('')
      }
    })
  }
}

export default CoinContainer
