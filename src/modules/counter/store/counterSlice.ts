import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { /* IRootState, */ IRootThunk } from '@/store/types'

import { fetchCount } from '../api/counterAPI'
import type { ICounterState } from './types'

const initialState: ICounterState = {
    value: 0,
    status: 'idle',
    incrementAmount: 2,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            console.log('type:::', action.type)
            state.value += action.payload
        },
        incrementAmountFromInput: (state, action: PayloadAction<{ value: number }>) => {
            state.incrementAmount = action.payload.value
        },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            // Handle the action types defined by the `incrementAsync` thunk defined below.
            // This lets the slice reducer update the state with request status and results.
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value += action.payload
            })
            .addCase(incrementAsync.rejected, (state) => {
                state.status = 'failed'
            })
    },
    selectors: {
        selectCount: (state) => state.value,
        selectStatus: (state) => state.status,
        selectIncrementAmount: (state) => state.incrementAmount,
    },
})

export const { increment, decrement, incrementByAmount, incrementAmountFromInput } = counterSlice.actions

export const { selectCount, selectStatus, selectIncrementAmount } = counterSlice.selectors

export default counterSlice.reducer

// Selectors can also be defined inline in the `useSelector` call
// in a component, or inside the `createSlice.selectors` field.
// export const selectCount = (state: IRootState) => state.counter.value
// export const selectStatus = (state: IRootState) => state.counter.status

// The function below is called a thunk, which can contain both sync and async logic
// that has access to both `dispatch` and `getState`. They can be dispatched like
// a regular action: `dispatch(incrementIfOdd(10))`.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount: number): IRootThunk => {
    return (dispatch, getState) => {
        const currentValue = selectCount(getState())
        if (currentValue % 2 === 1) {
            dispatch(incrementByAmount(amount))
        }
    }
}

// Thunks are commonly used for async logic like fetching data.
// The `createAsyncThunk` method is used to generate thunks that
// dispatch pending/fulfilled/rejected actions based on a promise.
// In this example, we make a mock async request and return the result.
// The `createSlice.extraReducers` field can handle these actions
// and update the state with the results.
export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async ({ amount }: { amount: number }): Promise<number> => {
        console.log('amount:::', amount)
        const response = await fetchCount(amount)
        // The value we return becomes the `fulfilled` action payload
        return response.data
    },
)
