import Logo from '@img/Logo.png'

const Navbar = () => {
  return (
    <div className='relative z-50'>
      <div className='flex justify-between px-7 items-center py-4'>
        <div>
          <img src={Logo} className='h-1/2 w-1/2 ' alt="" />
        </div>
        <div className='flex gap-5'>
          <a className='font-semibold text-[#142349] text-lg hover:text-[#4D5CE5] duration-300 transition-colors' href="#">Pages</a>
          <a className='font-semibold text-[#142349] text-lg hover:text-[#4D5CE5] duration-300 transition-colors' href="#">About Center</a>
          <a className='font-semibold text-[#142349] text-lg hover:text-[#4D5CE5] duration-300 transition-colors' href="#">Treatments</a>
          <a className='font-semibold text-[#142349] text-lg hover:text-[#4D5CE5] duration-300 transition-colors' href="#">Fees</a>
          <a className='font-semibold text-[#142349] text-lg hover:text-[#4D5CE5] duration-300 transition-colors' href="#">Medical Team</a>
          <a className='font-semibold text-[#142349] text-lg hover:text-[#4D5CE5] duration-300 transition-colors' href="#">Contact Us</a>
          <a className='font-semibold text-[#142349] text-lg hover:text-[#4D5CE5] duration-300 transition-colors' href="#">Dental Blog</a>
          <div>
            <button className='bg-[#4268D2] hover:bg-[#3353AE] font-semibold text-white  px-5 py-1.5 rounded-[100px]'>Emergency Call</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar