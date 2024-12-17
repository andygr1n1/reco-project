import { createContext, type ReactNode, useContext } from 'react'
import type { IRoot$ } from './types'
import { Root$ } from './stores/Root.store'

const storeContext = createContext<IRoot$ | null>(null)

export const root$ = Root$.create({})

export const useRoot$ = (): IRoot$ => {
    const store = useContext(storeContext)
    if (!store) {
        throw new Error('use Store shall be used within StoreProvider')
    }

    return store
}

export const Root$Provider = ({ children, store }: { children: ReactNode; store: IRoot$ }) => {
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}
