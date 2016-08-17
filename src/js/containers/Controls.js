/* @flow */
'use strict'

import m from 'mithril'

import controlsComponent from '../components/controls'
import coinComponent from '../components/coin'

import {
  getCoinButtonsStyles
} from '../selectors/controls'

import {
  submitGuess
} from '../actions/controls'

const controlsContainer = {
  view(vnode: Object) {
    return m(controlsComponent, {
      ...vnode.attrs,
      buttons: getCoinButtonsStyles(vnode.attrs.store.getState()).map(buttonTransformStyleValues => {
        return m(coinComponent, {
          logoAttrs: {
            onclick: () => vnode.attrs.store.dispatch(submitGuess(buttonTransformStyleValues))
          },
          coinAttrs: {
            style: {
              transform: `rotateY(${buttonTransformStyleValues.rotateY}deg) rotateZ(${buttonTransformStyleValues.rotateZ}deg)`,
            }
          }
        })
      })
    })
  }
}

export default controlsContainer
