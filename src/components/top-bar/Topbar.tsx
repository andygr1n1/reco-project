import { RecoLogo } from './components/RecoLogo'
import { TopMenu } from './components/TopMenu'

export const Topbar = () => {
    return (
        <div className='w-full flex bg-recoblue'>
            <RecoLogo />
            <TopMenu />
        </div>
    )
}
