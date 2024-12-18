import { cn } from '@/helpers/cn'
import { NavLink } from 'react-router-dom'

export const MenuItem: React.FC<{ to: string; title: string }> = ({ to, title }) => {
    return (
        <NavLink
            to={to}
            className={(data) => {
                return cn(
                    'text-white px-4 min-w-[77px] flex items-center justify-center h-[calc(100%-16px)]',
                    `${data.isActive ? 'border-solid border-3 border-t-transparent border-l-transparent border-r-transparent' : ''}`,
                )
            }}
        >
            <div>{title}</div>
        </NavLink>
    )
}
