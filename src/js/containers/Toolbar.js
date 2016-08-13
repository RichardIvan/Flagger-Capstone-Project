/* @flow */
'use strict'

import m from 'mithril'

import toolbarComponent from '../components/toolbar'

import hamburgerIcon from '../../images/hamburger-icon.png'
import settingsIcon from '../../images/settings-icon.png'

import {
  isSettingsComponentOpen
} from '../selectors'

import {
  toggleSettingsOpenState,
  openNavigation
} from '../actions'

// TODO add attributes
// TODO add click handler for buttons

const toolbarContainer = {
  view(vnode: Object) {
    return m(toolbarComponent, {
      navigationIconAttrs: {
        src: hamburgerIcon
      },
      navigationButtonAttrs: {
        onclick: () => vnode.attrs.store.dispatch(openNavigation())
      },
      settingsIconAttrs: {
        src: settingsIcon,
      },
      settingsButtonAttrs: {
        onclick: () => {
          vnode.attrs.store.dispatch(toggleSettingsOpenState(!isSettingsComponentOpen(vnode.attrs.store.getState())))
        }
      }
    })
  }
}

export default toolbarContainer
