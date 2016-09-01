/* @flow */
'use strict'

import {
  fromJS,
  Map
} from 'immutable'

import {
  SUBMIT_GUESS,
  SWITCH_CONTROL_STATE,
  SET_CONTROLS
} from '../constants'

import random from 'lodash/random'
import some from 'lodash/some'
import sample from 'lodash/sample'
import cloneDeep from 'lodash/cloneDeep'
import shuffle from 'lodash/shuffle'

export function submitGuess(index: number) {
  return {
    type: SUBMIT_GUESS,
    payload: {
      answer: index,
      end: new Date()
    }
  }
}

function setControlState(status: boolean) {
  return () => {
    return {
      type: SWITCH_CONTROL_STATE,
      payload: {
        disabled: status
      }
    }
  }
}

export const disableControls = setControlState(true)

export const enableControls = setControlState(false)

const differentY = [180]
const differentZ = [90, 180, 270]

const generateRandomCoin = (controls: Array<Object>) => {
  let result = []
  const nextEntry = cloneDeep(controls[0])
  let firstRandom = false
  if(random(1)) {
    firstRandom = true
    nextEntry.rotateY = nextEntry.rotateY + differentY[0]
  }
  if (!firstRandom || random(1)) {
    let randomNewValue = sample(differentZ)
    if (randomNewValue === 450) {
      randomNewValue = randomNewValue - 90
    }
    nextEntry.rotateZ = nextEntry.rotateZ + randomNewValue
  }

  if (
    some(controls, (item) => {
      return item.rotateZ === nextEntry.rotateZ && item.rotateY === nextEntry.rotateY
    })
  ) {
    return generateRandomCoin(controls)
  } else {
    result = result.concat(controls)
    result.push(nextEntry)
    return result
  }
}

export function randomizeControls(currentCoinState: Map<string, number>) {
  const coinState = currentCoinState.toJS()
  let controls = [coinState]
  while(controls.length < 3) {
    controls = generateRandomCoin(controls)
  }
  return {
    type: SET_CONTROLS,
    payload: fromJS(shuffle(controls))
  }
}
