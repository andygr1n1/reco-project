import recoLogo from '/img/reco-logo.png'

export const RecoLogo = () => {
    return (
        <div className='w-fit flex items-center justify-between mx-5'>
            <img src={recoLogo} alt='reco-logo' className='h-[30px]' />
        </div>
    )
}
