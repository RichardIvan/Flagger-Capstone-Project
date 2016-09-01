/* @flow */
'use strict'

import {
  isNavigationComponentOpen as isNavOpen,
  isExitPromptVisible
} from '../../selectors'

export function isToolbarButtonFocusable(state: Object) {
  return isNavOpen(state) || isExitPromptVisible(state)
}
