import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { App } from './App'
import { App as AntdApp } from 'antd'
import { root$, Root$Provider } from './mst/StoreProvider'
import './styles/index.scss'

const queryClient = new QueryClient()

const Main = () => {
    return (
        <QueryClientProvider client={queryClient}>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            <AntdApp className='w-full h-full flex'>
                <Root$Provider store={root$}>
                    <App />
                </Root$Provider>
            </AntdApp>
            <Toaster
                toastOptions={{
                    duration: 4000,
                    error: {
                        duration: 4000,
                    },
                }}
            />
        </QueryClientProvider>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />)
