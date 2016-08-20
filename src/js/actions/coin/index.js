/* @flow */
'use strict'

import {
  FLIP_COIN,
  ANIMATE_COIN
} from '../constants/action-types'

export function flipCoin() {
  return {
    type: FLIP_COIN
  }
}

export function animateCoin(values: Object) {
  return {
    type: ANIMATE_COIN,
    payload: {
      values
    }
  }
}
