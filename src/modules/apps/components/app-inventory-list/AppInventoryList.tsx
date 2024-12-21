import { useAppInventoryColumns } from './hooks/useAppInventoryColumns'
import { Table } from 'antd'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useAppDispatch, useAppSelector } from '@/store/useRootStore'
import {
    fetchCompanies,
    selectCompanies,
    selectIsLoading,
    selectTotalCompanies,
    fetchCompanyById,
} from '../../stores/appInventoryList.slice'
export const AppInventoryList = observer(() => {
    const dispatch = useAppDispatch()
    const loading = useAppSelector(selectIsLoading)
    const total = useAppSelector(selectTotalCompanies)
    const companies = useAppSelector(selectCompanies)

    // const {
    //     companies,
    //     companiesIsLoading,
    //     totalNumberOfCompanies: total,
    //     fetchCompanies,
    //     fetchSelectedCompany,
    //     onChangeField,
    // } = useRoot$()
    const { columns } = useAppInventoryColumns()

    useEffect(() => {
        dispatch(fetchCompanies())
    }, [])

    return (
        <div className='w-full animate-opacity overflow-auto scrollbar-thumb-blue-500/10 scrollbar-thin h-full my-10'>
            <Table
                loading={loading}
                dataSource={companies}
                columns={columns}
                onRow={(record) => ({
                    onClick: () => {
                        console.log('record', record)
                        const appId = record.appId
                        dispatch(fetchCompanyById({ appId }))
                    },
                    className: 'cursor-pointer',
                })}
                pagination={{
                    position: ['bottomCenter'],
                    defaultPageSize: 25,
                    pageSizeOptions: [25, 50],
                    total,
                    showSizeChanger: true,
                }}
            />
        </div>
    )
})
