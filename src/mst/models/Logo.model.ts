import { types } from 'mobx-state-tree'

export const Logo = types.model('Logo', {
    app: types.maybe(types.string),
    connector: types.maybe(types.string),
})
