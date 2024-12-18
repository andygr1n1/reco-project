import ky from 'ky'

export type IObj = {
    id: string
    name: string
    data: Record<string, string | number>
}

export const postObjects = async ({ data: json }: { data: IObj }) => {
    const endpoint = import.meta.env.VITE_END_POINT

    const response = await ky.post(`${endpoint}/objects`, {
        headers: {
            'Content-Type': 'application/json',
        },
        json,
    })
    return response
}
