import { useRoot$ } from '@/mst/StoreProvider'
import { List } from 'antd'
import { observer } from 'mobx-react-lite'

export const AboutCompanyUsersList = observer(() => {
    const { selectedCompany } = useRoot$()
    if (!selectedCompany) return null

    const { users } = selectedCompany

    return (
        <div>
            {/* {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))} */}
            <List
                header='Username'
                dataSource={users}
                renderItem={(item) => (
                    <List.Item>
                        <div className='flex items-center gap-2'>
                            <div>
                                <img src={item.pic} alt={item.name} width={32} height={32} className='rounded-full' />
                            </div>
                            <div>{item.name}</div>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    )
})
