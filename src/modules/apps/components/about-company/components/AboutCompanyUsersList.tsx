import { useRoot$ } from '@/mst/StoreProvider'
import { List } from 'antd'
import { observer } from 'mobx-react-lite'
import { AboutCompanyUserInfo } from './AboutCompanyUserInfo'
import type { IUser } from '@/mst/types'

export const AboutCompanyUsersList = observer(() => {
    const { selectedCompany } = useRoot$()
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
