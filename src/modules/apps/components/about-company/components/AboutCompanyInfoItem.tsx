export const AboutCompanyInfoItem = ({ label, value }: { label: string; value: string }) => {
    return (
        <div className='flex gap-2'>
            <div>{label}:</div>
            <div>{value}</div>
        </div>
    )
}
