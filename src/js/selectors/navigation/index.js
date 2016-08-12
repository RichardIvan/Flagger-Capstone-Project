/* @flow */
'use strict'

export function isNavigationComponentOpen(state: Object) {
    return state.componentsState.navigationState.get('open')
}
