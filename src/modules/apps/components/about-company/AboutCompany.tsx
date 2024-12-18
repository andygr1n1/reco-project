import { useRoot$ } from '@/mst/StoreProvider'
import { Drawer } from 'antd'
import { observer } from 'mobx-react-lite'
import { AboutCompanyHeader } from './components/AboutCompanyHeader'
import { AboutCompanyInfo } from './components/AboutCompanyInfo'
import { AboutCompanyUsersList } from './components/AboutCompanyUsersList'

export const AboutCompany = observer(() => {
    const { selectedCompany, onChangeField } = useRoot$()

    const onClose = () => {
        onChangeField('selectedCompany', undefined)
    }

    if (!selectedCompany) return null

    return (
        <Drawer
            title='App overview'
            placement='right'
            onClose={onClose}
            open={!!selectedCompany}
            key='right'
            size='large'
        >
            <div className='flex flex-col gap-2'>
                <AboutCompanyHeader />
                <AboutCompanyInfo />
                <AboutCompanyUsersList />
            </div>
        </Drawer>
    )
})
