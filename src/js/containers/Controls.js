/* @flow */
'use strict'

import m from 'mithril'

import controlsComponent from '../components/controls'
import coinComponent from '../components/coin'

import {
  getCoinButtonsStyles
} from '../selectors/controls'

import {
  isExitPromptVisible
} from '../selectors/overlay'

import {
  submitGuess
} from '../actions/controls'

import {
  constructControlsOverlay
} from '../helpers/controls'

const controlsContainer = {
  view(vnode: Object) {
    return m(controlsComponent, {
      ...vnode.attrs,
      buttons: getCoinButtonsStyles(vnode.attrs.state).map((buttonTransformStyleValues, index) => {
        return m('button', {
          onclick: () => vnode.attrs.dispatch(submitGuess(index)),
          onkeyup: (e) => {
            const code = e.keyCode
            if (code === 13 || code === 32) {
              vnode.attrs.dispatch(submitGuess(index))
            }
          },
          tabIndex: isExitPromptVisible(vnode.attrs.state) ? -1 : 0
        },
        m(coinComponent, {
          ...vnode.attrs,
          coinAttrs: {
            style: {
              transform: `rotateY(${buttonTransformStyleValues.rotateY}deg) rotateZ(${buttonTransformStyleValues.rotateZ}deg)`,
            }
          },
          frontCoinOverlay: constructControlsOverlay(vnode.attrs.state),
          backCoinOverlay: constructControlsOverlay(vnode.attrs.state),
          })
        )
      })
    })
  }
}

export default controlsContainer
