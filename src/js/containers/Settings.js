/* @flow */
'use strict'

import m from 'mithril'

import settingsComponent from '../components/settings'

import {
  isSoundOn
} from '../selectors/settings'

import {
  toggleSounds
} from '../actions'

import {
  authButtonBySignedInStatus
} from '../helpers'

import styles from '../components/settings/settings-styles.scss'

const settingsContainer = {
  view(vnode: Object) {
    return m(settingsComponent, {
      ...vnode.attrs,
      settingsComponentAttrs: {
          class: styles.settings
      },
      checkboxAttrs: {
        checked: isSoundOn(vnode.attrs.store.getState())
      },
      checkmarkAttrs: {
        onclick: () => toggleSounds(vnode.attrs.store),
        onkeyup: (e) => {
          if (e.keyCode === 13 || e.keyCode === 32) {
            toggleSounds(vnode.attrs.store)
          }
        }
      },
      oauthButton: authButtonBySignedInStatus(vnode.attrs.store)
    })
  }
}

export default settingsContainer
