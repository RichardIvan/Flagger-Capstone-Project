/* @flow */
'use strict'

import {
  Map,
  List,
  fromJS
} from 'immutable'

import uuid from 'uuid'

import {
  SHOW_GAME_INFO,
  HIDE_GAME_INFO,
  SET_COIN_POSITION,
  FLIP_COIN,
  SET_CONTROLS,
  NEW_SINGLE_PLAYER_GAME,
  SET_GAME_LEVEL,
  ANIMATE_COIN,
  SAVE_ROUND_RESULT,
  START_GAME,
  SAVE_ANIMATION_SEQUENCE
} from '../../actions/constants'

export const initialState = Map({
  controls: List.of(
    Map({
      rotateY: 0,
      rotateZ: 0
    }),
    Map({
      rotateY: 0,
      rotateZ: 90
    }),
    Map({
      rotateY: 0,
      rotateZ: 180
    })
  ),
  coin: Map({
    rotateY: 0,
    rotateZ: 0
  }),
  gameInfobox: Map({
    visible: false,
    text: ''
  }),
  scores: Map({
    players: List.of(0)
  }),
  level: 1,
  animationSequence: List.of()
})

export function constructDisplayInfoObject(text: string) {
  return Map({
    visible: true,
    text
  })
}

const currentGameReducer = (state: Map<string, any> = initialState, action: Object) => {
  if (!action || !action.type) return state
  switch (action.type) {
    case SAVE_ROUND_RESULT:
      return state.set('gameInfobox', constructDisplayInfoObject(`+ ${action.payload.points}`))
                  .set('level', state.get('level') + 1)
    case SHOW_GAME_INFO:
      return state.set('gameInfobox', constructDisplayInfoObject(action.payload.text))
    case HIDE_GAME_INFO:
      return state.setIn(['gameInfobox', 'visible'], false)
    case SET_COIN_POSITION:
      return state.mergeIn(['coin'], action.payload)
    case FLIP_COIN:
      return state.setIn(['coin', 'rotateY'], state.getIn(['coin', 'rotateY']) + 180)
    case SET_CONTROLS:
      return state.set('controls', action.payload)
    case NEW_SINGLE_PLAYER_GAME:
      return state.setIn(['scores', 'players', action.payload.player_id], 0)
    case SET_GAME_LEVEL:
      return state.set('level', action.payload.level)
    case ANIMATE_COIN:
      return state.mergeIn(['coin'], action.payload.values)
    case START_GAME:
      const l = ['scores', 'players']
      const resetPlayers = state.getIn(l).map(player => 0)
      let resetState = initialState.setIn(l, resetPlayers)

      return resetState
    case SAVE_ANIMATION_SEQUENCE:
      return state.set('animationSequence', fromJS(action.payload))
    default:
      return state
  }
}

export default currentGameReducer
