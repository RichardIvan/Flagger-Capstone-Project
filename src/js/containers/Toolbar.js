/* @flow */
'use strict'

import m from 'mithril'

import toolbarComponent from '../components/toolbar'

import hamburgerIcon from '../../images/hamburger-icon.png'
import settingsIcon from '../../images/settings-icon.png'
import exitIcon from '../../images/close-icon.png'

import {
  isSettingsComponentOpen,
  getPlayersScores
} from '../selectors'

import {
  toggleSettingsOpenState,
  openNavigation,
  showExitGamePrompt
} from '../actions'

import {
  isNavigationComponentOpen as isNavOpen
} from '../selectors/navigation'

import {
  isGameInProgress,
} from '../selectors/game'

// TODO add attributes
// TODO add click handler for buttons

const toolbarContainer = {
  view(vnode: Object) {
    return m(toolbarComponent, {
      leftIcon: {
        class: isGameInProgress(vnode.attrs.state) ? 'close-icon' : '',
        src: isGameInProgress(vnode.attrs.state) ? exitIcon : hamburgerIcon
      },
      navigationButtonAttrs: {
        onclick: () => vnode.attrs.dispatch(isGameInProgress(vnode.attrs.state) ? showExitGamePrompt() : openNavigation()),
        tabIndex: isNavOpen(vnode.attrs.state) ? -1 : 0
      },
      settingsIconAttrs: {
        src: settingsIcon,
      },
      settingsButtonAttrs: {
        onclick: () => {
          vnode.attrs.dispatch(toggleSettingsOpenState(!isSettingsComponentOpen(vnode.attrs.state)))
        },
        tabIndex: isNavOpen(vnode.attrs.state) ? -1 : 0
      },
      scores: isGameInProgress(vnode.attrs.state) ? m('ul.scores', [
        getPlayersScores(vnode.attrs.state).map((score, index) => m('li', `P${index + 1} - ${score}pt`))
      ]) : null
    })
  }
}

export default toolbarContainer
