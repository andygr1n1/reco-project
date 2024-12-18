import { MenuItem } from './MenuItem'

export const TopMenu = () => {
    return (
        <div className='w-full min-h-[52px] flex items-center justify-start mx-2'>
            <MenuItem to='/apps' title='Apps' />
            <MenuItem to='/data' title='Data' />
            <MenuItem to='/identities' title='Identities' />
            <MenuItem to='/alerts' title='Alerts' />
            <MenuItem to='/investigation-center' title='Investigation Center' />
            <MenuItem to='/configurations' title='Configurations' />
        </div>
    )
}
