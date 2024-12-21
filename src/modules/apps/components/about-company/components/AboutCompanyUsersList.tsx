import { List } from 'antd'
import { observer } from 'mobx-react-lite'
import { AboutCompanyUserInfo } from './AboutCompanyUserInfo'
import { useAppSelector } from '@/store/useRootStore'
import { selectSelectedCompany } from '@/modules/apps/stores/appInventoryList.slice'
import type { IUser } from '@/modules/apps/stores/types'

export const AboutCompanyUsersList = observer(() => {
    const selectedCompany = useAppSelector(selectSelectedCompany)
    if (!selectedCompany) return null

    const { users } = selectedCompany

    return (
        <div>
            <List<IUser>
                header='Username'
                dataSource={users}
                renderItem={(user) => <AboutCompanyUserInfo key={user.id} user={user} />}
            />
        </div>
    )
})
