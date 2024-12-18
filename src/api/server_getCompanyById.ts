import { processError } from '@/helpers/processMessage'
import type { ICompanyExtended } from '@/helpers/types'
import { mockAboutCompany } from './mock/mock_about_company'
export const server_getCompanyById = async (id: string): Promise<ICompanyExtended | undefined> => {
    try {
        console.log(id)
        return mockAboutCompany
    } catch (error) {
        return processError(error)
    }
}
