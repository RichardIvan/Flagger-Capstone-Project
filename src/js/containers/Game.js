/* @flow */
'use strict'

import m from 'mithril'

import gameComponent from '../components/game'
import coinComponent from '../components/coin'
import controlsContainer from './Controls'

import {
  getCoinRotateY
} from '../selectors/coin'

const gameContainer = {
  view(vnode: Object) {
    return m(gameComponent, {
      ...vnode.attrs,
      coin: m(coinComponent, {
        ...vnode.attrs,
        coinAttrs: {
          style: {
            transform: `rotateY(${getCoinRotateY(vnode.attrs.store.getState())}deg)`
          }
        }
      }),
      controls: m(controlsContainer, { ...vnode.attrs })
    })
  }
}

export default gameContainer
