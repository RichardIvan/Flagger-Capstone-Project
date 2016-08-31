/* @flow */
'use strict'

import m from 'mithril'

import overlayComponent from '../components/overlay'
import exitGamePromptContainer from './ExitGamePrompt'

import {
  isOverlayOpen as isOpen
} from '../selectors/overlay'

import {
  isGameInProgress,
  isExitPromptVisible
} from '../selectors/game'

import {
  closeNavigation
} from '../actions/side-nav'

import {
  resumeGame
} from '../actions/game'

const overlayContainer = {
  view(vnode) {
    return m(overlayComponent, {
      overlayAttrs: {
        class: isOpen(vnode.attrs.state) ? 'open' : '',
        onclick: () => vnode.attrs.dispatch(isGameInProgress(vnode.attrs.state) ? resumeGame() : closeNavigation())
      }
    },[
      m(exitGamePromptContainer, {
        ...vnode.attrs
      })
      // isExitPromptVisible(vnode.attrs.state) ? m(exitGamePromptContainer, {
      //   ...vnode.attrs
      // }) : null
    ])
  }
}

export default overlayContainer
