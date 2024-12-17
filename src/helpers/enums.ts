export type ValueOf<T> = T[keyof T]

export enum EXAMPLE {
    EX = 'ex',
}

export const APP_ROUTES_ENUM = {
    ABOUT: 'about',
} as const

export type IAppRoutes = ValueOf<typeof APP_ROUTES_ENUM>
