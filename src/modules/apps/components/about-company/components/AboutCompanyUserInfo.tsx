import type { IUser } from '@/mst/types'
import { List } from 'antd'
import { observer } from 'mobx-react-lite'
import noImg from '/img/no-img.png'
export const AboutCompanyUserInfo: React.FC<{ user: IUser }> = observer(({ user }) => {
    const { pic, name } = user
    return (
        <List.Item>
            <div className='flex items-center gap-2'>
                <img src={pic ? pic : noImg} alt={name} width={32} height={32} className='rounded-full' />
                <div>{name}</div>
            </div>
        </List.Item>
    )
})
