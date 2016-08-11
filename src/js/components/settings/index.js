/* @flow */
'use strict'

import m from 'mithril'

import buttonComponent from '../menu-button'

import {
  authButtonBySignedInStatus
} from '../../helpers'

import {
  toggleSounds
} from '../../actions'

// TODO extract data to settingsComponent
// FIX button event handler

const settingsComponent = {
  view(vnode: Object) {
    return m('#settings', vnode.attrs.settingsComponentAttrs, [
      m('.heading', m('h2', 'Settings')),
      m('.controls', [
        m('.settings-options', [
          m('ul', m('li', [
            m('label', {
              id: 'sounds-label'
            }, 'Sounds'),
            m('input[type=checkbox][aria-labelledby=sounds-label]', {
              checked: true,
              onclick: () => toggleSounds(vnode.attrs.store)
            })
          ]))
        ]),
        m('.oauthButton', authButtonBySignedInStatus(vnode.attrs.store))
      ])
    ])
  }
}

export default settingsComponent
