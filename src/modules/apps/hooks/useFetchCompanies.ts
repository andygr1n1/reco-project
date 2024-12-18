import { server_getCompanies as queryFn } from '@/api/server_getCompanies'
import { useQuery } from '@tanstack/react-query'
import { optimizeCompanies } from '../helpers/optimizeCompanies'

export const KEY_companies = (key?: unknown) => ['KEY_companies', String(key)]

export const useFetchCompanies = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: KEY_companies(),
        queryFn,
    })

    return { data: optimizeCompanies(data), isLoading, error }
}
