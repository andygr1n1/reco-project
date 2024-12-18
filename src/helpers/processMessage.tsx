import type { ReactNode } from 'react'
import toast from 'react-hot-toast'

export const processError = (content: unknown, showToast = true) => {
    const stringContent = String(content)
    showToast && toast.error(<div>{stringContent}</div>)
    console.info('==>')
    content && console.error(`${stringContent}:`)
    console.info('<==')
    return undefined
}

export const notify = (message?: ReactNode, props?: { message: ReactNode }) =>
    toast(<div className='whitespace-normal flex w-full h-full items-center'>{props?.message || message}</div>, {
        id: !!message ? String(message) : String(props?.message),
        icon: null,
    })

export const notifySuccess = (message?: ReactNode, props?: { message: ReactNode }) =>
    toast.success(
        <div className='whitespace-normal flex w-full h-full items-center'>{props?.message || message}</div>,
        {
            id: !!message ? String(message) : String(props?.message),
        },
    )
