/* @flow */
'use strict'

import m from 'mithril'

import sidenavComponent from '../components/side-nav'

import {
  isUserSignedIn as isSignedIn
} from '../selectors/user'

import {
  isNavigationComponentOpen as isNavbarOpen
} from '../selectors/navigation'

import {
  closeNavigation
} from '../actions/side-nav'

import {
  signIn,
  signOut
} from '../actions/user'

const sidenavContainer = {
  oninit(vnode: Object) {
    vnode.state.appState = vnode.attrs.store.getState()
  },
  onbeforeupdate(vnode: Object) {
    vnode.state.appState = vnode.attrs.store.getState()
  },
  view(vnode: Object) {
    return m(sidenavComponent, {
      sidenavAttrs: {
        class: isNavbarOpen(vnode.state.appState) ? 'open' : ''
      },
      headingAttrs: {
        onclick: () => vnode.attrs.store.dispatch(closeNavigation())
      },
      achievementsAttrs: {
        onclick: () => showAchievements()
      },
      highscoresAttrs: {
        onclick: () => showHighscores()
      },
      oauthAttrs: {
        onclick: () => {
          vnode.attrs.store.dispatch(isSignedIn(vnode.state.appState) ? signOut() : signIn())
        }
      },
      oauthButtonText: isSignedIn(vnode.state.appState) ? 'Log Out' : 'Sign In'
    })
  }
}

export default sidenavContainer
