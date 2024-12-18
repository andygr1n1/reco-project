import { types } from 'mobx-state-tree'
import { Logo } from '../models/Logo.model'

export const Company$ = types
    .model('Company$', {
        id: types.identifier,
        appId: types.string,
        name: types.string,
        category: types.string,
        connector: types.string,
        logos: types.optional(Logo, {}),
    })
    .views((self) => ({
        get key(): string {
            return self.id
        },
    }))
