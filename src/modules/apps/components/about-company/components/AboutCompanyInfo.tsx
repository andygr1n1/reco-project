import { useRoot$ } from '@/mst/StoreProvider'
import { observer } from 'mobx-react-lite'
import { AboutCompanyInfoItem } from './AboutCompanyInfoItem'

export const AboutCompanyInfo = observer(() => {
    const { selectedCompany } = useRoot$()
    if (!selectedCompany) return null

    const { name, category, users, lastClassificationDate } = selectedCompany

    return (
        <div className='border-solid border-blue-500/50 border rounded-md p-2 bg-blue-100/50'>
            <AboutCompanyInfoItem label='App name' value={name} />
            <AboutCompanyInfoItem label='Category' value={category} />
            <AboutCompanyInfoItem label='Users' value={String(users.length)} />
            <AboutCompanyInfoItem label='Last classification' value={lastClassificationDate} />
        </div>
    )
})
