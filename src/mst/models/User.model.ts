import { types } from 'mobx-state-tree'

export const User = types.model('User', {
    id: types.string,
    name: '',
    pic: '',
})
