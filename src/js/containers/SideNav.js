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

import {
  showAchievements,
  showHighscores
} from '../actions/side-nav'

const sidenavContainer = {
  oninit(vnode: Object) {
    vnode.state.appState = vnode.attrs.store.getState()
    vnode.state.tabIndex = isNavbarOpen(vnode.attrs.store.getState()) ? 0 : -1
  },
  onbeforeupdate(vnode: Object) {
    vnode.state.appState = vnode.attrs.store.getState()
    vnode.state.tabIndex = isNavbarOpen(vnode.attrs.store.getState()) ? 0 : -1
  },
  view(vnode: Object) {
    return m(sidenavComponent, {
      sidenavAttrs: {
        class: isNavbarOpen(vnode.state.appState) ? 'open' : '',
        onupdate: function() {
          const isOpen = isNavbarOpen(vnode.state.appState)
          if (isOpen && !this.focused) {
            this.focused = true
            window.setTimeout(function () {
              vnode.dom.focus()
            }, 0)
          }
          if (!isOpen) this.focused = false
        }
      },
      headingAttrs: {
        onclick: () => {
          vnode.attrs.store.dispatch(closeNavigation())
          m.route.set('/menu')
        },
        onkeyup: (e) => {
          const code = e.keyCode
          if (code === 13 || code === 32) {
            vnode.attrs.store.dispatch(closeNavigation())
            m.route.set('/menu')
          }
        },
        tabIndex: vnode.state.tabIndex
      },
      achievementsAttrs: {
        onclick: () => vnode.attrs.store.dispatch(showAchievements()),
        onkeyup: (e) => {
          const code = e.keyCode
          if (code === 13 || code === 32) {
            vnode.attrs.store.dispatch(showAchievements())
          }
        },
        tabIndex: vnode.state.tabIndex
      },
      highscoresAttrs: {
        onclick: () => vnode.attrs.store.dispatch(showHighscores()),
        onkeyup: (e) => {
          const code = e.keyCode
          if (code === 13 || code === 32) {
            vnode.attrs.store.dispatch(showHighscores())
          }
        },
        tabIndex: vnode.state.tabIndex
      },
      oauthAttrs: {
        onclick: () => {
          vnode.attrs.store.dispatch(isSignedIn(vnode.state.appState) ? signOut() : signIn())
        },
        onkeyup: (e) => {
          const code = e.keyCode
          if (code === 13 || code === 32) {
            vnode.attrs.store.dispatch(isSignedIn(vnode.state.appState) ? signOut() : signIn())
          }
        },
        tabIndex: vnode.state.tabIndex
      },
      oauthButtonText: m('span', isSignedIn(vnode.state.appState) ? 'Log Out' : 'Sign In')
    })
  }
}

export default sidenavContainer