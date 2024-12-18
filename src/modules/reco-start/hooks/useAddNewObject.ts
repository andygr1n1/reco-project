import { postObjects as mutationFn, type IObj } from '@/api/server_postObjects'
import { useMutation } from '@tanstack/react-query'

export const useAddNewObject = () => {
    const mutation = useMutation({
        mutationFn,
    })

    const addNewObject = ({ data }: { data: IObj }) => mutation.mutate({ data })

    return { addNewObject }
}
