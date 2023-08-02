import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { TreatmentCard } from '../components';
import TreaOne from '@img/TreaOne.png'
import TreaTwo from '@img/TreaTwo.png'
import TreaThree from '@img/TreaThree.png'
import TreaFour from '@img/TreaFour.png'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


const Treatments = () => {
  const swiperRef = useRef(null);
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  }
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  }

  const treatments = [
    { name: 'Dental Whitening', desc: 'A beautiful smile contributes to a better mood and boosts self-esteem. We can help you with that.', image: TreaOne },
    { name: 'Dental Implant', desc: 'A beautiful smile contributes to a better mood and boosts self-esteem. We can help you with that.', image: TreaTwo },
    { name: 'Braces & Aligners', desc: 'A beautiful smile contributes to a better mood and boosts self-esteem. We can help you with that.', image: TreaThree },
    { name: 'Veneers', desc: 'A beautiful smile contributes to a better mood and boosts self-esteem. We can help you with that.', image: TreaFour },
  ]



  return (
    <div className='relative z-40 mb-24 '>
      <div className='flex flex-col lg:flex-row justify-between items-center container mx-auto py-12 px-10'>
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <h2 className='text-[#142349] text-5xl font-bold'>What <span className="text-[#4268D2]">Dental Treatments</span></h2>
          <h2 className="text-[#142349] text-5xl font-bold mt-2">Do We Offer?</h2>
        </div>
        <div className='w-full lg:w-1/2'>
          <div className=' flex lg:justify-end justify-center mt-10 lg:mt-0  items-center space-x-10'>
            <button className="prev-button text-[#142349] hover:bg-[#92C1FA]  transition-all rounded-full duration-300 text-6xl lg:text-4xl  border border-[#142349]" onClick={handlePrev}><MdKeyboardArrowLeft /></button>
            <button className="next-button text-[#142349] hover:bg-[#92C1FA]  transition-all rounded-full duration-300 text-6xl lg:text-4xl border border-[#142349]" onClick={handleNext}><MdKeyboardArrowRight /></button>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-10'>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={2}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            640: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 30
            },
           
          }}
          loop={true}
          navigation={{
            prevEl: '.prev-button',
            nextEl: '.next-button',
          }}>
          {
            treatments.map((treatment, index) => (
              <SwiperSlide key={index}>
                <TreatmentCard treatment={treatment} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Treatments