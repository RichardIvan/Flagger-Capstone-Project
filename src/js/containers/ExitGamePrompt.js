/* @flow */
'use strict'

import m from 'mithril'

import exitGamePromptComponent from '../components/exit-game-prompt'

import {
  resumeGame,
  cancelGame
} from '../actions/game'

import {
  MENU_ROUTE
} from '../actions/constants'

const exitGamePromptContainer = {
  view(vnode: Object) {
    return m(exitGamePromptComponent, {
      ...vnode.attrs,
      yesButtonAttrs: {
        onclick: (e) => {
          e.stopPropagation()
          vnode.attrs.dispatch(cancelGame())
        }
      },
      noButtonAttrs: {
        onclick: (e) => {
          e.stopPropagation()
          vnode.attrs.dispatch(resumeGame())
        }
      }
    })
  }
}

export default exitGamePromptContainer
