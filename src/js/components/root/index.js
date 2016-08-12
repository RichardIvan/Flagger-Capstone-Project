/* @flow */
'use strict'

import m from 'mithril'
import styles from './root-styles.scss'
import toolbarContainer from '../../containers/Toolbar'
import sidebarContainer from '../../containers/SideNav'

const RootComponent = {
  view(vnode: Object) {
    return m('#root', [
      m(sidebarContainer, { ...vnode.attrs }),
      m(toolbarContainer, { ...vnode.attrs }),
      m(`.${styles.container}`, vnode.attrs.container)
    ])
  }
}

export default RootComponent
