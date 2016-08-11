/* @flow */
'use strict'

export function isSettingsComponentOpen(state: Object) {
    return state.componentsState.settingsState.get('open')
}
