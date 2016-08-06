/* @flow */
'use strict'

import {
  MOBILE_STATE_CHANGE
} from '../constants'

export function setMobileState (value: boolean): Object {
  return {
    type: MOBILE_STATE_CHANGE,
    payload: {
      state: {
        value
      }
    }
  }
}
