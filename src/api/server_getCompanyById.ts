import { processError } from '@/helpers/processMessage'
import { mockAboutCompany } from './mock/mock_about_company'
import type { ISelectedCompany } from '@/modules/apps/stores/types'
export const server_getCompanyById = async (id: string): Promise<ISelectedCompany | undefined> => {
    console.log('server_getCompanyById', id)

    try {
        return new Promise<ISelectedCompany>((resolve) => setTimeout(() => resolve(mockAboutCompany), 300))
    } catch (error) {
        return processError(error)
    }
}
