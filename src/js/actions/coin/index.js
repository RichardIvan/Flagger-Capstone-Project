/* @flow */
'use strict'

import {
  FLIP_COIN
} from '../constants/action-types'

export function flipCoin() {
  return {
    type: FLIP_COIN
  }
}
