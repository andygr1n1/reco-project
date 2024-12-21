import { processError } from '@/helpers/processMessage'
import { mockCompanies } from '@/api/mock/mock_companies'
import type { ICompany } from '@/modules/apps/stores/types'
export const server_getCompanies = async (): Promise<ICompany[] | undefined> => {
    try {
        return new Promise<ICompany[]>((resolve) => setTimeout(() => resolve(mockCompanies), 500))
    } catch (error) {
        return processError(error)
    }
}
