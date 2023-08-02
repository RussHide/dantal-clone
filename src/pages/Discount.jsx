import FooterGirl from '@img/footerGirl.png'

const Discount = () => {
    return (
        <div className='bg-teeth bg-cover bg-center bg-no-repeat  bg-[#4268D2] w-full relative  container px-10  mx-auto rounded-tr-[120px] rounded-bl-[120px] py-24 mb-24' >
            <div className='flex flex-col justify-center items-center text-center lg:py-7 py-0'>
                <h2 className='text-white text-4xl lg:text-6xl font-bold mb-2 max-w-xl leading-relaxed'>Get <span className='text-[#92C1FA] underline'>10%-Off</span> Your First Visit</h2>
                <p className='text-white max-w-2xl my-10 lg:my-6  text-lg'>If you are in need of high-quality, professional and friendly dental care, look no further than our clinic.</p>
                <button className='bg-white font-semibold text-[#4268D2] hover:-translate-y-1 transition-transform duration-500 px-10 py-2.5 rounded-[100px]'>Book now</button>
            </div>
            <img src={FooterGirl} className='absolute bottom-0 right-0 w-3/12 lg:w-3/12 ' alt="" />
        </div>
    )
}

export default Discount