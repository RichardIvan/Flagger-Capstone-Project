/* @flow */
'use strict'

import m from 'mithril'

import rightButtonEdgeImage from '../../../images/button-right.png'
import leftButtonEdgeImage from '../../../images/button-left.png'

import styles from './menu-button-styles.scss'

const menuButtonComponent = {
  view(vnode: Object) {
    return m('button.button-holder', vnode.attrs.buttonAttrs ,[
      m('.button-edge', m(`img.${styles.leftImageEdge}`, {
        src: leftButtonEdgeImage
      })),
      m('.inner-button', vnode.attrs.text),
      m('.button-edge', m(`img.${styles.rightImageEdge}`, {
        src: rightButtonEdgeImage
      }))
    ])
  }
}

export default menuButtonComponent
