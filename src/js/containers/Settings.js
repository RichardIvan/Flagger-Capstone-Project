/* @flow */
'use strict'

import m from 'mithril'

import settingsComponent from '../components/settings'

import styles from '../components/settings/settings-styles.scss'

const settingsContainer = {
  view(vnode: Object) {
    return m(settingsComponent, {
      ...vnode.attrs,
      settingsComponentAttrs: {
          class: styles.settings
      }
    })
  }
}

export default settingsContainer
