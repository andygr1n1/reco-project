import logo from '/img/reco.png'

const RecoStart = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen w-full bg-blue-300'>
            <img src={logo} alt='logo' className='min-w-[100px] min-h-[100px] rounded-lg select-none animate-opacity' />
        </div>
    )
}

export default RecoStart
