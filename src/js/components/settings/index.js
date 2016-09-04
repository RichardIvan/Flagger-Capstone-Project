/* @flow */
'use strict'

import m from 'mithril'

import buttonComponent from '../menu-button'

import checkmark from '../../../images/checkmark.png'

// TODO extract data to settingsComponent
// FIX button event handler

const settingsComponent = {
  view(vnode: Object) {
    return m('#settings', vnode.attrs.settingsComponentAttrs, [
      m('.heading', m('h2', 'Settings')),
      m('.controls', [
        m('.controls-info', [
          m('h2', 'Controls'),
          vnode.attrs.playerControlsInfo
        ]),
        m('.settings-options', [
          m('ul', m('li', [
            m('label', {
              id: 'sounds-label'
            }, 'Sounds'),
            m('.checkbox_wrapper', [
              m('input#checkbox[type=checkbox][tabindex=-1][aria-label="sound-checkbox"][aria-hidden="true"]', vnode.attrs.checkboxAttrs),
              m(`.image_wrapper[tabindex=0][aria-label=${vnode.attrs.soundsLabel}]`, vnode.attrs.checkmarkAttrs, m(`img[src=${checkmark}][alt='Checkmark Image']`))
            ])
          ]))
        ]),
        m('.oauthButton', vnode.attrs.oauthButton)
      ])
    ])
  }
}

export default settingsComponent
