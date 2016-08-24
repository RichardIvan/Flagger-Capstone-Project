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

import {
  isNavigationComponentOpen as isNavOpen
} from '../selectors/navigation'

// TODO add attributes
// TODO add click handler for buttons

const toolbarContainer = {
  view(vnode: Object) {
    return m(toolbarComponent, {
      navigationIconAttrs: {
        src: hamburgerIcon
      },
      navigationButtonAttrs: {
        onclick: () => vnode.attrs.store.dispatch(openNavigation()),
        tabIndex: isNavOpen(vnode.attrs.store.getState()) ? -1 : 0
      },
      settingsIconAttrs: {
        src: settingsIcon,
      },
      settingsButtonAttrs: {
        onclick: () => {
          vnode.attrs.store.dispatch(toggleSettingsOpenState(!isSettingsComponentOpen(vnode.attrs.store.getState())))
        },
        tabIndex: isNavOpen(vnode.attrs.store.getState()) ? -1 : 0
      }
    })
  }
}

export default toolbarContainer