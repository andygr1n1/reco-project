import { Topbar } from '@/components/top-bar/Topbar'
import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const Apps = lazy(() => import('../modules/apps/Apps'))

export const Layout = () => {
    return (
        <div className='w-full h-full flex flex-col'>
            <BrowserRouter basename='/' future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Topbar />
                <Suspense fallback={null}>
                    <Routes>
                        <Route path={`/`} element={<Apps />} />
                        <Route path={`/apps`} element={<Apps />} />
                        <Route path={`/data`} element={<Apps />} />
                        <Route path={'/'} element={<Navigate to={`/apps`} />} />
                        <Route path={'/*'} element={<Navigate to={`/apps`} />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    )
}
