export type ICompany = {
    appId: string
    name: string
    category: string
    connector: string
    logos: {
        app?: string
        connector: string
    }
}

export type ICompanyExtended = Omit<ICompany, 'connector' | 'logos'> & {
    lastClassification: string
    connector: {
        name: string
        logo: string
    }
    users: {
        id: string
        name: string
        pic?: string
    }[]
}
