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
        checked: isSoundOn(vnode.attrs.state)
      },
      soundsLabel: `Sounds Settings Checkbox, ${isSoundOn(vnode.attrs.state) ? 'checked' : 'unchecked'}`,
      checkmarkAttrs: {
        onclick: () => vnode.attrs.dispatch(toggleSounds(isSoundOn(vnode.attrs.state))),
        onkeyup: (e) => {
          if (e.keyCode === 13 || e.keyCode === 32) {
            vnode.attrs.dispatch(toggleSounds(isSoundOn(vnode.attrs.state)))
          }
        }
      },
      oauthButton: authButtonBySignedInStatus(vnode.attrs.state, vnode.attrs.dispatch)
    })
  }
}

export default settingsContainer
