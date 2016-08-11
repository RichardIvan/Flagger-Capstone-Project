/* @flow */
'use strict'

import m from 'mithril'
// import styles from './root-styles.scss'
import toolbarContainer from '../../containers/Toolbar'

const RootComponent = {
  view(vnode: Object) {
    return m('#root', [
      m(toolbarContainer, { ...vnode.attrs }),
      m('.container', vnode.attrs.container)
    ])
  }
}

export default RootComponent
