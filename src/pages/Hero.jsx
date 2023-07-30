import HeroGirl from '@img/HeroGirl.png'
import HeroBack from '@img/HeroBack.png'
import TrustedHero from '@img/TrustedHero.png'
import { Navbar } from '../components'

const Hero = () => {
  return (
    <div className='relative bg-hero bg-cover bg-center bg-no-repeat '>
      <div className='bg-tooth bg-cover bg-center bg-no-repeat top-0 absolute w-full h-full opacity-5' />
      <Navbar />
      <div className='flex justify-center items-center container mx-auto relative z-50 gap-12 py-16 px-10'>
        <div className='w-1/2'>
          <div className=''>
            <h3 className='text-6xl text-[#142349] font-bold max-w-md'>High Quality and <span className='text-[#4268D2]'>Painless Dentistry</span> </h3>
            <p className='mt-7 text-xl font-semibold text-gray-600 max-w-xl'>
              If you are in need of high-quality, professional and friendly dental care, look no further than our clinic.
            </p>
            <button className='bg-[#4268D2] mb-10 mt-7 font-semibold text-white hover:-translate-y-1 transition-transform duration-500 px-10 py-2.5 rounded-[100px]'>Book now</button>
          </div>
          <div className=''>
            <div className='flex w-full justify-start items-center'>
              <img src={TrustedHero} className='h-12 mr-10' alt="" />
              <p className='font-semibold text-gray-500'>Trusted by 150K+ people around the globe</p>
            </div>
          </div>
        </div>
        <div className='w-1/2 relative z-50' >
          <img src={HeroGirl} alt="" />
          <img src={HeroBack} className='absolute top-0 -z-10' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero