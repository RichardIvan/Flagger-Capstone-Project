/* @flow */
'use strict'

import {
  FLIP_COIN,
  ANIMATE_COIN,
  OVERLAY_COIN,
  REMOVE_COIN_OVERLAY
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

export function overlayCoin() {
  return {
    type: OVERLAY_COIN
  }
}

export function removeCoinOverlay() {
  return {
    type: REMOVE_COIN_OVERLAY
  }
}
