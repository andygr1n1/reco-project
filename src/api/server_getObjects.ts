import { processError } from '@/helpers/processMessage'
import ky from 'ky'

type IResponse = {
    id: string
    name: string
}

export const getObjects = async (): Promise<IResponse[] | undefined> => {
    const endpoint = import.meta.env.VITE_END_POINT
    try {
        const response = await ky.get<IResponse[]>(`${endpoint}/objects`).json()
        console.log('response', response)
        return response
    } catch (error) {
        return processError(error)
    }
}
