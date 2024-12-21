import { observer } from 'mobx-react-lite'
import { AboutCompanyInfoItem } from './AboutCompanyInfoItem'
import { useAppSelector } from '@/store/useRootStore'
import { selectLastClassificationDate, selectSelectedCompany } from '@/modules/apps/stores/appInventoryList.slice'

export const AboutCompanyInfo = observer(() => {
    const selectedCompany = useAppSelector(selectSelectedCompany)
    const lastClassificationDate = useAppSelector(selectLastClassificationDate)
    if (!selectedCompany) return null

    const { name, category, users } = selectedCompany

    return (
        <div className='border-solid border-blue-500/50 border rounded-md p-2 bg-blue-100/50'>
            <AboutCompanyInfoItem label='App name' value={name} />
            <AboutCompanyInfoItem label='Category' value={category} />
            <AboutCompanyInfoItem label='Users' value={String(users.length)} />
            <AboutCompanyInfoItem label='Last classification' value={lastClassificationDate} />
        </div>
    )
})
