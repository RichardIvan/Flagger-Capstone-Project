/* @flow */
'use strict'

import m from 'mithril'

import settingsComponent from '../components/settings'

import take from 'lodash/take'

import {
  isSoundOn,
  isMobile
} from '../selectors'

import {
  toggleSounds
} from '../actions'

import {
  authButtonBySignedInStatus
} from '../helpers'

import styles from '../components/settings/settings-styles.scss'

const P1controls = '1, 2, 3'
const P2controls = '8, 9, 0'
const controls = [P1controls, P2controls]

const settingsContainer = {
  view(vnode: Object) {
    return m(settingsComponent, {
      ...vnode.attrs,
      playerControlsInfo: take(controls.map((playerInfo, index) => {
        return m('ul', [
          m('li', `P${index + 1}`),
          m('li', controls[index])
        ])
      }), isMobile(vnode.attrs.state) ? 1 : 2),
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
