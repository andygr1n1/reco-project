import type { ILoadingStatus } from '@/helpers/enums'

export type IAppInventoryListState = {
    companies: ICompany[]
    status: ILoadingStatus
    selectedCompany: ISelectedCompany | null
}

export type ICompany = {
    appId: string
    name: string
    category: string
    connector: string
    logos?: ILogo
}

type ILogo = {
    app?: string
    connector: string
}

export type ISelectedCompany = Omit<ICompany, 'connector' | 'logos'> & {
    lastClassification: string
    connector: {
        name: string
        logo: string
    }
    users: IUser[]
}

export type IUser = {
    id: string
    name: string
    pic?: string
}
