/* @flow */
'use strict'

import m from 'mithril'

import gameComponent from '../components/game'
import coinComponent from '../components/coin'
import controlsContainer from './Controls'
import gameInfoboxContainer from '../containers/GameInfobox'

import {
  getCoinRotateY,
  getCoinRotateZ,
  isCoinOverlayVisible
} from '../selectors/coin'

import {
  constructCoinOverlay
} from '../helpers/game'


const gameContainer = {
  view(vnode: Object) {
    return m(gameComponent, {
      ...vnode.attrs
    }, [
      m(coinComponent, {
        ...vnode.attrs,
        frontCoinOverlay: constructCoinOverlay(vnode.attrs.store.getState(), 'shadow'),
        backCoinOverlay: constructCoinOverlay(vnode.attrs.store.getState(), 'shadow'),
        coinAttrs: {
          style: {
            transform: `rotateY(${getCoinRotateY(vnode.attrs.store.getState())}deg) rotateZ(${getCoinRotateZ(vnode.attrs.store.getState())}deg)`
          },
          class: 'game-coin'
        }
      }),
      m(gameInfoboxContainer, { ...vnode.attrs }),
      m(controlsContainer, { ...vnode.attrs })
    ])
  }
}

export default gameContainer
