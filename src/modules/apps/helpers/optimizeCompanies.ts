import type { ICompany } from '@/helpers/types'
import type { ICompany$SnapshotIn } from '@/mst/types'

export const optimizeCompanies = (companies?: ICompany[]): ICompany$SnapshotIn[] => {
    return (
        companies?.map((company) => ({
            id: company.appId,
            ...company,
        })) || []
    )
}
