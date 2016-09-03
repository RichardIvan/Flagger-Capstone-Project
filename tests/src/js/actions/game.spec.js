/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  isFSA
} from 'flux-standard-action'

import {
  PLAYING_SINGLEPLAYER_ROUTE,
  MENU_ROUTE
} from '../../../../src/js/actions/constants'

import {
  startGame,
  newRound,
  setGameLevel,
  resetLevel,
  saveRoundResult,
  saveAnimationSequence,
  showExitGamePrompt,
  resumeGame,
  cancelGame,
  replayGame,
  exitGame,
  setHighscores,
  setPlayerName
} from '../../../../src/js/actions'

import {
  generateAnimationSequence
} from '../../../../src/js/helpers/game'

describe('Game Action Creator', () => {
  it('should create FSA compliant action', () => {
    expect(isFSA(startGame())).toBe(true)
  })
  it('should return correct action', () => {
    expect(startGame()).toEqual({
      type: 'START_GAME'
    })
  })
})

describe('#NEW_ROUND action creator', () => {
  it('should create FSA compliant action', () => {
    expect(isFSA(newRound())).toBe(true)
  })
  it('should return correct action', () => {
    expect(newRound()).toEqual({
      type: 'NEW_ROUND'
    })
  })
})

describe('#SET_GAME_LEVEL action creator', () => {
  it('should create FSA compliant action', () => {
    expect(isFSA(setGameLevel(1))).toBe(true)
  })
  it('should return correct action', () => {
    expect(setGameLevel(1)).toEqual({
      type: 'SET_GAME_LEVEL',
      payload: {
        level: 1
      }
    })
  })
  it('should set level to 1 of no level number provided', () => {
    expect(setGameLevel()).toEqual({
      type: 'SET_GAME_LEVEL',
      payload: {
        level: 1
      }
    })
  })
})

describe('saveRoundResult action creator', () => {
  it('should be FSA compliant', () => {
    expect(isFSA(saveRoundResult())).toBe(true)
  })
  it('should should accept a number or have zero in payload points', () => {
    expect(saveRoundResult()).toEqual({
      type: 'SAVE_ROUND_RESULT',
      payload: {
        points: 0
      }
    })
    expect(saveRoundResult(10)).toEqual({
      type: 'SAVE_ROUND_RESULT',
      payload: {
        points: 10
      }
    })
  })
})

describe('saveAnimationSequence()', () => {
  let level = 3
  let animationSequence
  beforeEach(function () {
    animationSequence = generateAnimationSequence(level)
  })
  it('should be FSA compliant', () => {
    expect(isFSA(saveAnimationSequence(animationSequence))).toBe(true)
  })
  it('should payload should be an array', () => {
    expect(saveAnimationSequence(animationSequence).payload).toBeA(Array)
  })
  it('should have correct number of items in payload', () => {
    expect(saveAnimationSequence(animationSequence).payload.length).toBe(3)
  })
  it('should have the correct action type', () => {
    expect(saveAnimationSequence(animationSequence).type).toBe('SAVE_ANIMATION_SEQUENCE')
  })
})

describe('#showExitGamePrompt() action creator', () => {
  it('should be FSA compliant', () => {
    expect(isFSA(showExitGamePrompt())).toBe(true)
  })
  it('should have the correct action type', () => {
    expect(showExitGamePrompt().type).toBe('SHOW_EXIT_GAME_PROMPT')
  })
})

describe('#resumeGame() action creator', () => {
  it('should be FSA compliant', () => {
    expect(isFSA(resumeGame())).toBe(true)
  })
  it('should return correct action', () => {
    expect(resumeGame().type).toBe('RESUME_GAME')
  })
})

describe('#cancelGame() action creator', () => {
  it('should be FSA compliant', () => {
    expect(isFSA(cancelGame())).toBe(true)
  })
  it('should return correct action', () => {
    expect(cancelGame().type).toBe('CANCEL_GAME')
  })
})

describe('#replayGame() action creator', () => {
  it('should be FSA compliant', () => {
    expect(isFSA(replayGame())).toBe(true)
  })
  it('should return correct action', () => {
    expect(replayGame().type).toBe('REPLAY_GAME')
  })
  it('should should have correct route parameter', () => {
    expect(replayGame().payload.route).toBe(PLAYING_SINGLEPLAYER_ROUTE)
  })
})

describe('#exitGame() action creator', () => {
  it('should be FSA compliant', () => {
    expect(isFSA(exitGame())).toBe(true)
  })
  it('should return correct action', () => {
    expect(exitGame().type).toBe('EXIT_GAME')
  })
  it('should should have correct route parameter', () => {
    expect(exitGame().payload.route).toBe(MENU_ROUTE)
  })
})

describe('#setHighscores()', () => {
  let highscores
  beforeEach(function () {
    highscores = [
      {
        id: 1,
        name: 'RIA',
        score: 1024
      },
      {
        id: 2,
        name: 'MIA',
        score: 512
      }
    ]
  })
  it('should be FSA compliant', () => {
    expect(isFSA(setHighscores(highscores))).toBe(true)
  })
  it('should have correct action type', () => {
    expect(setHighscores(highscores).type).toBe('INITIAL_HIGHSCORES_LOAD')
  })
  it('should have a highscores entry in payload with correct values', () => {
    expect(setHighscores(highscores).payload).toExist()
    expect(setHighscores(highscores).payload.highscores).toEqual(highscores)
  })
})

describe('#setPlayerName()', () => {
  let names
  beforeEach(function () {
    names = ['RIA', 'MIA']
  })
  it('should be FSA compliant', () => {
    names.map((name, index) => {
      expect(isFSA(setPlayerName(index, name))).toBe(true)
    })
  })
  it('should have correct action type', () => {
    names.map((name, index) => {
      expect(setPlayerName(index, name).type).toBe('SET_PLAYER_NAME')
    })
  })
  it('should have corrct payload', () => {
    names.map((name, index) => {
      expect(setPlayerName(index, name).payload.index).toBeA('number')
      expect(setPlayerName(index, name).payload.name).toBeA('string')
      expect(setPlayerName(index, name).payload.name.length).toBe(3)
    })
  })
})
