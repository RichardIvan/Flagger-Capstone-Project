/* @flow */
'use strict'

import m from 'mithril'

import coinComponent from '../components/coin'

import {
  getCoinRotateY,
  isCoinOverlayVisible
} from '../selectors/coin'

import {
  flipCoin
} from '../actions/coin'

import ring from '../../images/ring.png'
import front from '../../images/thumb-front.png'
import back from '../../images/thumb-back.png'

// import back from

const CoinContainer = {
  view(vnode: Object) {
    return m(coinComponent, {
      ...vnode.attrs,
      logoAttrs: {
        onclick: () => vnode.attrs.store.dispatch(flipCoin())
      },
      coinAttrs: {
        style: {
          transform: `rotateY(${getCoinRotateY(vnode.attrs.store.getState())}deg) rotateZ(0deg)`
        }
      }
    })
  }
}

export default CoinContainer
