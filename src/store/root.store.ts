import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/modules/counter/store/counterSlice'
import appInventoryListReducer from '@/modules/apps/stores/appInventoryList.slice'

export const root$ = configureStore({
    reducer: {
        counter: counterReducer,
        appInventoryList: appInventoryListReducer,
        // selectedCompany: selectedCompanyReducer,
    },
})
