/* @flow */
'use strict'

import m from 'mithril'

import coinComponent from '../components/coin'

import {
  getCoinRotateY
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
      logoAttrs: {
        onclick: () => vnode.attrs.store.dispatch(flipCoin())
      },
      coinAttrs: {
        style: {
          transform: `rotateY(${getCoinRotateY(vnode.attrs.store.getState())}deg)`,
        }
      }
    })
  }
}

export default CoinContainer
