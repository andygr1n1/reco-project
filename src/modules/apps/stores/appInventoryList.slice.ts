import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'
import type { IAppInventoryListState, ICompany, ISelectedCompany } from './types'
import { server_getCompanies } from '@/api/server_getCompanies'
import type { IRootState } from '@/store/types'
import { server_getCompanyById } from '@/api/server_getCompanyById'
import { LOADING_STATUS_ENUM } from '@/helpers/enums'
import { calculateDaysAgo } from '@/helpers/date'

const initialState: IAppInventoryListState = {
    companies: [],
    status: LOADING_STATUS_ENUM.IDLE,
    selectedCompany: null,
}

export const appInventoryListSlice = createSlice({
    name: 'appInventoryList',
    initialState,
    reducers: {
        removeSelectedCompany: (state) => {
            state.selectedCompany = null
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCompanies.pending, (state) => {
            state.status = LOADING_STATUS_ENUM.LOADING
        })
        builder.addCase(fetchCompanies.fulfilled, (state, action) => {
            state.companies = action.payload
            state.status = LOADING_STATUS_ENUM.IDLE
        })
        builder.addCase(fetchCompanyById.pending, (state) => {
            state.status = LOADING_STATUS_ENUM.LOADING
        })
        builder.addCase(fetchCompanyById.fulfilled, (state, action) => {
            state.status = LOADING_STATUS_ENUM.IDLE
            state.selectedCompany = action.payload
        })
    },
    selectors: {
        selectIsLoading: (state) => state.status === LOADING_STATUS_ENUM.LOADING,
        selectTotalCompanies: (state) => state.companies.length,
        selectSelectedCompany: (state) => state.selectedCompany,
    },
})

export default appInventoryListSlice.reducer



export const { selectIsLoading, selectTotalCompanies, selectSelectedCompany } = appInventoryListSlice.selectors

export const selectCompanies = createSelector(
    (state: IRootState) => state.appInventoryList.companies,
    (companies) => companies.map((company) => ({ ...company, key: company.appId })),
)

export const selectLastClassificationDate = createSelector([selectSelectedCompany], (selectedCompany) =>
    selectedCompany?.lastClassification ? calculateDaysAgo(selectedCompany.lastClassification) : '',
)

export const { removeSelectedCompany } = appInventoryListSlice.actions

/* async actions */

export const fetchCompanies = createAsyncThunk('appInventoryList/fetchCompanies', async (): Promise<ICompany[]> => {
    const response = await server_getCompanies()
    return response ?? []
})

export const fetchCompanyById = createAsyncThunk(
    'appInventoryList/fetchCompanyById',
    async ({ appId }: { appId: string }): Promise<ISelectedCompany | null> => {
        const response = await server_getCompanyById(appId)
        return response ?? null
    },
)
