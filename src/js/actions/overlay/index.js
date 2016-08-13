/* @flow */
'use strict'

import {
  CLOSE_OVERLAY
} from '../constants'

export function closeOverlay() {
  return {
    type: CLOSE_OVERLAY
  }
}
