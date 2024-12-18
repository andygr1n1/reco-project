import { formatDistance } from 'date-fns'

export const calculateDaysAgo = (date: string) => {
    return formatDistance(new Date(date), new Date(), { addSuffix: true })
}
