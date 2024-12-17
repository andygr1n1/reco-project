import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const RecoStart = lazy(() => import('../modules/reco-start/RecoStart'))

export const Layout = () => {
    return (
        <Suspense fallback={null}>
            <BrowserRouter basename='/' future={{ v7_startTransition: true }}>
                <Routes>
                    <Route path={`/`} element={<RecoStart />} />
                    <Route path={`/${APP_ROUTES_ENUM.ABOUT}/*`} element={<RecoStart />} />
                    <Route path={'/*'} element={<Navigate to={`/`} />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}
