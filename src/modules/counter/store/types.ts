export type ICounterState = {
    value: number
    status: 'idle' | 'loading' | 'failed'
    incrementAmount: number
}

