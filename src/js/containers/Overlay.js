/* @flow */
'use strict'

import m from 'mithril'

import overlayComponent from '../components/overlay'
import exitGamePromptContainer from './ExitGamePrompt'

import {
  isOverlayOpen as isOpen,
  isExitPromptVisible
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
      isExitPromptVisible(vnode.attrs.state) ? m(exitGamePromptContainer, {
        ...vnode.attrs
      }) : null
    ])
  }
}

export default overlayContainer
