/* @flow */
'use strict'

import m from 'mithril'

import sample from 'lodash/sample'
import random from 'lodash/random'

import {
  isCoinOverlayVisible
} from '../../selectors/coin'

const animationTypeOptions = ['rotateY', 'rotateZ']

const rotateZoption = -90
const rotateYoption = -180

export function generateAnimationSequence(numberOfAnimations: number) {
  let result = []
  let lastValues = {
    rotateY: 0,
    rotateZ: 0
  }
  for (let i = 0; i < numberOfAnimations; i++) {
    const animationType = sample(animationTypeOptions)
    let animationValue

    if (animationType === 'rotateY') {
      animationValue = rotateYoption
      const shouldBeAddition = random(1)
      if(shouldBeAddition) {
        animationValue *= -1
      }

    } else {
      animationValue = rotateZoption
      const shouldBeAddition = random(1)
      if (shouldBeAddition) {
        animationValue *= -1
      }
    }

    let nextAnimationValue
    nextAnimationValue = lastValues[animationType] + (animationValue)
    lastValues[animationType] = nextAnimationValue

    result.push({
      [animationType]: nextAnimationValue
    })
  }
  return result
}

const overlayArray = new Array(4).fill(0)

export function constructCoinOverlay(state: Object) {
  return m('ul.coin-overlay', [
    overlayArray.map(slot => m('li', {
      class: isCoinOverlayVisible(state) ? 'visible' : ''
    }))
  ])
}
