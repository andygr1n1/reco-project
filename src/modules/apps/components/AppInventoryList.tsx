import { useRoot$ } from '@/mst/StoreProvider'
import { useAppInventoryColumns } from '../hooks/useAppInventoryColumns'
import { Table } from 'antd'
import { useEffect } from 'react'
import { AboutCompany } from './about-company/AboutCompany'
import { observer } from 'mobx-react-lite'
export const AppInventoryList = observer(() => {
    const {
        companies,
        companiesIsLoading,
        totalNumberOfCompanies: total,
        fetchCompanies,
        fetchSelectedCompany,
        onChangeField,
    } = useRoot$()
    const { columns } = useAppInventoryColumns()

    useEffect(() => {
        onChangeField('companiesIsLoading', true)
        setTimeout(() => {
            fetchCompanies()
        }, 1000)
    }, [])

    return (
        <div className='w-full animate-opacity overflow-auto scrollbar-thumb-blue-500/10 scrollbar-thin h-full my-10'>
            <Table
                loading={companiesIsLoading}
                dataSource={companies}
                columns={columns}
                onRow={(record) => ({
                    onClick: () => {
                        const id = record.id
                        fetchSelectedCompany({ id })
                    },
                })}
                pagination={{
                    position: ['bottomCenter'],
                    defaultPageSize: 25,
                    pageSizeOptions: [25, 50],
                    total,
                }}
            />
            <AboutCompany />
        </div>
    )
})
