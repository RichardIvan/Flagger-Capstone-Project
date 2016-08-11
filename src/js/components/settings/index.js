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
        m('.settings-options', [
          m('ul', m('li', [
            m('label', {
              id: 'sounds-label'
            }, 'Sounds'),
            m('.checkbox_wrapper', [
              m('input#checkbox[type=checkbox][aria-labelledby=sounds-label][tabindex=-1]', vnode.attrs.checkboxAttrs),
              m('.image_wrapper[tabindex=0]', vnode.attrs.checkmarkAttrs, m(`img[src=${checkmark}]`))
            ])
          ]))
        ]),
        m('.oauthButton', vnode.attrs.oauthButton)
      ])
    ])
  }
}

export default settingsComponent
