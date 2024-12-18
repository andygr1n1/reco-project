import { ModuleTitle } from '@/components/ModuleTitle'
import { AppInventoryList } from './components/AppInventoryList'
export const Apps = () => {
    return (
        <div className='w-full  max-w-[1367px] h-full mx-auto'>
            <ModuleTitle title='App Inventory' />
            <AppInventoryList />
        </div>
    )
}

export default Apps
