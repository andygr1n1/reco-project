import { castToSnapshot, flow, toGenerator, types } from 'mobx-state-tree'
import { Company$ } from './Company.store'
import { processError } from '@/helpers/processMessage'
import { SelectedCompany$ } from './SelectedCompany.store'
import { server_getCompanyById } from '@/api/server_getCompanyById'

export const Root$ = types
    .model('Root$', {
        companies: types.array(Company$),
        selectedCompany: types.maybe(SelectedCompany$),
    })
    .views((self) => ({
        get totalNumberOfCompanies(): number {
            return self.companies.length
        },
    }))
    .volatile(() => ({
        companiesIsLoading: false,
        selectedCompanyIsLoading: false,
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },

        fetchSelectedCompany: flow(function* ({ id }: { id: string }) {
            try {
                self.selectedCompanyIsLoading = true
                const selectedCompany = yield* toGenerator(server_getCompanyById(id))

                selectedCompany &&
                    (self.selectedCompany = castToSnapshot({ ...selectedCompany, id: selectedCompany?.appId ?? '' }))
            } catch (e) {
                processError(e)
            } finally {
                self.selectedCompanyIsLoading = false
            }
        }),
    }))
