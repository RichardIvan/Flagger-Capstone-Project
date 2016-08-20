/* @flow */
'use strict'

import sample from 'lodash/sample'
import random from 'lodash/random'

const animationTypeOptions = ['rotateY', 'rotateZ']

const rotateZoptions = [90, 180, 270]
const rotateYoptions = 180

export function generateAnimationSequence(numberOfAnimations: number) {
  let result = []
  for (let i = 0; i < numberOfAnimations; i++) {
    const animationType = sample(animationTypeOptions)
    let animationValue
    if (animationType === 'rotateY') {
      animationValue = rotateYoptions
      const shouldBeSwapped = random(1)
      if(shouldBeSwapped) {
        animationValue *= -1
      }
      if (i !== 0) {
        const previousAnimationType = result[i - 1]
        const previousKey = Object.keys(previousAnimationType)[0]
        if (previousKey === 'rotateY') {
          animationValue = previousAnimationType[previousKey] *= -1
        }
      }
    } else {
      animationValue = sample(rotateZoptions)
      const shouldBeSwapped = random(1)
      if (shouldBeSwapped) {
        animationValue *= -1
      }
      if (i !== 0) {
        const previousAnimationType = result[i -1]
        const previousKey = Object.keys(previousAnimationType)[0]
        if (previousKey === 'rotateZ') {
          if (previousAnimationType[previousKey] === animationValue) {
            animationValue *= -1
          }
        }
      }
    }
    result.push({
      [animationType]: animationValue
    })
  }
  return result
}
