import { selectSelectedCompany } from '@/modules/apps/stores/appInventoryList.slice'
import { useAppSelector } from '@/store/useRootStore'
import { observer } from 'mobx-react-lite'

export const AboutCompanyHeader = observer(() => {
    const selectedCompany = useAppSelector(selectSelectedCompany)
    if (!selectedCompany) return null

    const {
        name,
        connector: { logo },
    } = selectedCompany

    return (
        <div className='flex items-center gap-2'>
            <img src={logo} alt={name} height={20} />
            <div>{name}</div>
        </div>
    )
})
