import { types } from 'mobx-state-tree'
import { User } from '../models/User.model'
import { Connector } from '../models/Connector.model'
import { calculateDaysAgo } from '@/helpers/date'

export const SelectedCompany$ = types
    .model('SelectedCompany$', {
        id: types.identifier,
        appId: types.string,
        name: types.string,
        category: types.string,
        lastClassification: '',
        users: types.array(User),
        connector: types.optional(Connector, {}),
    })
    .views((self) => ({
        get logo() {
            return self.connector.logo
        },
        get lastClassificationDate(): string {
            return calculateDaysAgo(self.lastClassification)
        }
    }))
