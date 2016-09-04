/* @flow */
'use strict'

import m from 'mithril'

import map from 'lodash/map'

import toolbarComponent from '../components/toolbar'

import hamburgerIcon from '../../images/hamburger-icon.png'
import settingsIcon from '../../images/settings-icon.png'
import exitIcon from '../../images/close-icon.png'

import {
  isSettingsComponentOpen,
  getPlayersScores,
  isGameInProgress
} from '../selectors'

import {
  toggleSettingsOpenState,
  openNavigation,
  showExitGamePrompt
} from '../actions'

import {
  isToolbarButtonFocusable
} from '../helpers/toolbar'

// TODO add attributes
// TODO add click handler for buttons


const toolbarContainer = {
  view(vnode: Object) {
    const gameInProgress = isGameInProgress(vnode.attrs.state)
    return m(toolbarComponent, {
      leftIcon: {
        class: gameInProgress ? 'close-icon' : '',
        src: gameInProgress ? exitIcon : hamburgerIcon,
        alt: `${gameInProgress ? 'Closing' : 'Menu'} Icon`,
        'aria-label': gameInProgress ? 'exit game' : 'open navigation'
      },
      navigationButtonAttrs: {
        onclick: () => vnode.attrs.dispatch(gameInProgress ? showExitGamePrompt() : openNavigation()),
        tabIndex: isToolbarButtonFocusable(vnode.attrs.state) ? -1 : 0
      },
      settingsIconAttrs: {
        src: settingsIcon,
        alt: 'Settings Icon',
        'aria-label': isSettingsComponentOpen(vnode.attrs.state) ? 'close setting' : 'open settings'
      },
      settingsButtonAttrs: {
        onclick: () => {
          vnode.attrs.dispatch(toggleSettingsOpenState(!isSettingsComponentOpen(vnode.attrs.state)))
        },
        tabIndex: isToolbarButtonFocusable(vnode.attrs.state) ? -1 : 0
      },
      scores: gameInProgress ? m('ul.scores', [
        map(getPlayersScores(vnode.attrs.state), (player, index) => {
          return m('li', `P${index + 1} - ${player.score}pt`)
        })
      ]) : null
    })
  }
}

export default toolbarContainer
