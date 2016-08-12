/* @flow */
'use strict'

import m from 'mithril'

import {
  isUserSignedIn as isSignedIn
} from '../selectors/user'

const sidenavContainer = {
  oninit(vnode) {
    vnode.state.appState = vnode.attrs.store.getState()
  },
  onbeforeupdate(vnode) {
    vnode.state.appState = vnode.attrs.store.getState()
  },
  view(vnode) {
    return m(sidenavComponent,
      sidenavAttrs: {
        class: isNavbarOpen(vnode.state.appState) ? 'open' : ''
      },
      headingAttrs: {
        onclick: () => closeSideNav()
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
    )
  }
}

export default sidenavContainer
