import { useRoot$ } from '@/mst/StoreProvider'
import { observer } from 'mobx-react-lite'

export const AboutCompanyHeader = observer(() => {
    const { selectedCompany } = useRoot$()
    if (!selectedCompany) return null

    const { name, logo } = selectedCompany

    return (
        <div className='flex items-center gap-2'>
            <img src={logo} alt={name} height={20} />
            <div>{name}</div>
        </div>
    )
})
