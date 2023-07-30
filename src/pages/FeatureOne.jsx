import FeatureOneImage from '@img/FeatureOne.png'
import QualityLogo from '@img/QualityLogo.png'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
const FeatureOne = () => {
  return (
    <div className='container mx-auto mb-24'>
      <div className="flex justify-center items-center gap-10">
        <div className='w-1/2 flex justify-center items-center relative'>
          <img src={FeatureOneImage} alt="" className='h-3/4 w-3/4'  />
          <img src={QualityLogo} className='absolute bottom-0 h-2/5 right-20 -rotate-45  ' alt="" />
        </div>
        <div className='w-1/2'>
          <div>
            <h2 className='text-[#142349] text-5xl font-bold'>First Impressions</h2>
            <h2 className='text-[#142349] text-5xl font-bold'>Begin with a <span className="text-[#4268D2]">Smile</span></h2>
          </div>
          <div>
            <p className='my-10'>
              The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and specialist dental treatments. With dental practices throughout the world, we are growing our clinic with just one goal in mind – to offer affordable, high quality dental care around the world.
            </p>
            <a href="#" className='flex justify-start items-center text-[#4268D2] font-bold hover:text-[#142349] transition-colors duration-300 '>
              <p>Discover more </p>
              <MdKeyboardDoubleArrowRight className='mt-1 ml-1 text-xl' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureOne