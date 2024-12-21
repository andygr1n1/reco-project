import { Drawer } from 'antd'
import { observer } from 'mobx-react-lite'
import { AboutCompanyHeader } from './components/AboutCompanyHeader'
import { AboutCompanyInfo } from './components/AboutCompanyInfo'
import { AboutCompanyUsersList } from './components/AboutCompanyUsersList'
import { useDispatch } from 'react-redux'
import { removeSelectedCompany, selectSelectedCompany } from '../../stores/appInventoryList.slice'
import { useAppSelector } from '@/store/useRootStore'

export const AboutCompany = observer(() => {
    const dispatch = useDispatch()
    const selectedCompany = useAppSelector(selectSelectedCompany)
    const onClose = () => {
        dispatch(removeSelectedCompany())
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
