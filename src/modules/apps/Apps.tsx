import { ModuleTitle } from '@/components/ModuleTitle'
import { AppInventoryList } from './components/app-inventory-list/AppInventoryList'
import { AboutCompany } from './components/about-company/AboutCompany'

export const Apps = () => {
    return (
        <div className='w-full  max-w-[1367px] h-full mx-auto'>
            <ModuleTitle title='App Inventory' />
            <AppInventoryList />
            <AboutCompany />
        </div>
    )
}

export default Apps
