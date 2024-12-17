import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const RecoStart = lazy(() => import('../modules/reco-start/RecoStart'))
const RecoAbout = lazy(() => import('../modules/reco-about/RecoAbout'))

export const Layout = () => {
    return (
        <Suspense fallback={null}>
            <BrowserRouter basename='/' future={{ v7_startTransition: true }}>
                <Routes>
                    <Route path={`/`} element={<RecoStart />} />
                    <Route path={`/${APP_ROUTES_ENUM.ABOUT}/*`} element={<RecoAbout />} />
                    {/* <Route path={'/'} element={<Navigate to={`/${APP_ROUTES_ENUM.INDEX}`} />} /> */}
                    <Route path={'/*'} element={<Navigate to={`/`} />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}
