import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DoctorCard, Stats } from '../components';


import DocOne from '@img/DocOne.png'
import DocTwo from '@img/DocTwo.png'
import DocThree from '@img/DocThree.png'
import DocFour from '@img/DocFour.png'
import DocFive from '@img/DocFive.png'
import DocSix from '@img/DocSix.png'
import DocSeven from '@img/DocSeven.png'


const Team = () => {

  const doctors = [
    { name: 'Dr. Nicole Silveira', role: 'Endodontics, Protodontics', image: DocTwo },
    { name: 'Dr. Peter Darcy', role: 'Complex extractions', image: DocThree },
    { name: 'Dr. Kate Eliott', role: 'General Dentistry', image: DocFour },
    { name: 'Dr. Dorothy Smith', role: 'Prosthodontics', image: DocFive },
    { name: 'Dr. Lisa orton', role: 'General Dentistry', image: DocSeven },
    { name: 'Dr. Ostin Kent', role: 'Orthodontics', image: DocOne },
    { name: 'Dr. Flor Smith', role: 'Implantology', image: DocSix },
  ]
  return (
    <div className='bg-middleLight bg-cover bg-center bg-no-repeat '>
      <div>
        <div className="flex flex-col lg:flex-row  my-10 mx-auto container px-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className='text-[#142349] text-5xl font-bold'>Our Friendly <span className="text-[#4268D2]">Dentists</span></h2>
            <h2 className="text-[#4268D2] text-5xl font-bold mt-2">Team</h2>
          </div>
          <div className="w-full lg:w-1/2 my-5 lg:my-0">
            <p className='text-lg text-gray-600 text-center lg:text-left'>
              The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and specialist dental treatments
            </p>
            <a href="#" className='flex justify-center lg:justify-start  items-center text-[#4268D2] font-bold hover:text-[#142349] transition-colors duration-300 mt-4'>
              <p>Discover more </p>
              <MdKeyboardDoubleArrowRight className='mt-1 ml-1 text-xl' />
            </a>
          </div>
        </div>
        <div className='px-10 '>
          <Swiper
            speed={1200}
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            loopPreventsSliding
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              // when window width is >= 480px
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20
              },
            }}
          >
            {
              [...doctors, ...doctors].map((doctor, index) => (
                <SwiperSlide key={index}>
                  <DoctorCard doctor={doctor} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <Stats />
      </div>
    </div>
  )
}

export default Team