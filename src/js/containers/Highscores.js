/* @flow */
'use strict'

import m from 'mithril'

import {
  getHighscores,
  isHighscoresVisible
} from '../selectors'

import HighscoresComponent from '../components/highscores'

const HighscoresContainer = {
  view(vnode: Object) {
    return m(HighscoresComponent, {
      ...vnode.attrs,
      highscores: getHighscores(vnode.attrs.state),
      highscoresAttrs: {
        style: {
          visibility: isHighscoresVisible(vnode.attrs.state) ? 'visible' : 'hidden'
        }
      }
    })
  }
}

export default HighscoresContainer
