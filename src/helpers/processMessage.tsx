import type { ReactNode } from 'react'
import toast from 'react-hot-toast'

export const processError = (content: string, showToast = true) => {
    showToast && toast.error(<div>{content}</div>)
    console.info('==>')
    content && console.error(`${content}:`)
    console.info('<==')
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
