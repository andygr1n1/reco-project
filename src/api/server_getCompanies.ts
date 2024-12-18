import { processError } from '@/helpers/processMessage'
import type { ICompany } from '@/helpers/types'
import { mockCompanies } from '@/api/mock/mock_companies'
export const server_getCompanies = async (): Promise<ICompany[] | undefined> => {
    try {
        return mockCompanies
    } catch (error) {
        return processError(error)
    }
}
