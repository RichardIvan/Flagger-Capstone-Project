/* @flow */
'use strict'

import m from 'mithril'

import overlayComponent from '../components/overlay'
import exitGamePromptContainer from './ExitGamePrompt'
import highscoreContainer from './Highscores.js'

import {
  isOverlayOpen as isOpen
} from '../selectors/overlay'

import {
  isGameInProgress
} from '../selectors/game'

import {
  closeNavigation
} from '../actions/side-nav'

import {
  resumeGame
} from '../actions/game'

const overlayContainer = {
  view(vnode: Object) {
    return m(overlayComponent, {
      overlayAttrs: {
        class: isOpen(vnode.attrs.state) ? 'open' : '',
        onclick: () => vnode.attrs.dispatch(isGameInProgress(vnode.attrs.state) ? resumeGame() : closeNavigation())
      }
    },[
      m(exitGamePromptContainer, {
        ...vnode.attrs
      }),
      m(highscoreContainer, {
        ...vnode.attrs
      })
    ])
  }
}

export default overlayContainer
