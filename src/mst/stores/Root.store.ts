import { types } from 'mobx-state-tree'

export const Root$ = types
    .model('Root$', {
        init: true,
    })

    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
    }))
