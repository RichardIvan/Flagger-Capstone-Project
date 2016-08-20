/* @flow */
'use strict'

import m from 'mithril'

import gameComponent from '../components/game'
import coinComponent from '../components/coin'
import controlsContainer from './Controls'
import gameInfoboxContainer from '../containers/GameInfobox'

import {
  getCoinRotateY,
  getCoinRotateZ
} from '../selectors/coin'

const gameContainer = {
  view(vnode: Object) {
    return m(gameComponent, {
      ...vnode.attrs
    }, [
      m(coinComponent, {
        ...vnode.attrs,
        coinAttrs: {
          style: {
            transform: `rotateY(${getCoinRotateY(vnode.attrs.store.getState())}deg) rotateZ(${getCoinRotateZ(vnode.attrs.store.getState())}deg)`
          }
        }
      }),
      m(gameInfoboxContainer, { ...vnode.attrs }),
      m(controlsContainer, { ...vnode.attrs })
    ])
  }
}

export default gameContainer
