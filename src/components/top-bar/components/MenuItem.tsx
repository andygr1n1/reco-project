import { cn } from '@/helpers/cn'
import { NavLink } from 'react-router-dom'

export const MenuItem: React.FC<{ to: string; title: string }> = ({ to, title }) => {
    return (
        <NavLink
            to={to}
            className={(data) => {
                return cn(
                    'text-white px-4 min-w-[77px] flex items-center rounded-none justify-center h-[calc(100%-10px)] border-solid border-y-[5px] border-l-[0px] border-r-[0px]  border-transparent',
                    `${data.isActive && 'border-b-white border-l-[0px] border-r-[0px]'}`,
                )
            }}
        >
            <div>{title}</div>
        </NavLink>
    )
}
