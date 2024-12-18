import { getObjects } from '@/api/server_getObjects'
import { useQuery } from '@tanstack/react-query'

export const useObjects = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['objects'],
        queryFn: async () => await getObjects(),
    })
    console.log('->>>data', data)
    return { data: data || [], isLoading, error }
}