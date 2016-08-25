/* @flow */
'use strict'

import m from 'mithril'

import {
  isControlsDisabled
} from '../../selectors/controls'

export function constructControlsOverlay(state: Object) {
  return m(`.${isControlsDisabled(state) ? 'disabled' : 'enabled'}`,)
}
