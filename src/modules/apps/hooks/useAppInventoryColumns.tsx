import noImg from '/img/no-img.png'
import type { ICompany$ } from '@/mst/types'

export const useAppInventoryColumns = () => {
    const columns = [
        {
            title: 'Name',
            key: 'name',
            sorter: (a: ICompany$, b: ICompany$) => a.name.localeCompare(b.name),
            render: (company: ICompany$) => {
                const logo = company.logos?.app

                return (
                    <div className='flex items-center gap-2'>
                        <div>{<img src={logo ? logo : noImg} alt={company.name} width={40} height={40} />}</div>
                        <div>{company.name}</div>
                    </div>
                )
            },
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            sorter: (a: ICompany$, b: ICompany$) => a.category.localeCompare(b.category),
        },
        {
            title: 'Connector',
            key: 'connector',
            sorter: (a: ICompany$, b: ICompany$) => a.connector.localeCompare(b.connector),
            render: (company: ICompany$) => {
                const connector = company.connector
                const logo = company.logos?.connector
                return (
                    <div className='flex items-center gap-2'>
                        <div>{<img src={logo ? logo : noImg} alt={connector} width={40} height={40} />}</div>
                        <div>{connector}</div>
                    </div>
                )
            },
        },
    ]

    return { columns }
}
