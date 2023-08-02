import ParOne from '@img/ParOne.png'
import ParTwo from '@img/ParTwo.png'
import ParThree from '@img/ParThree.png'
import ParFour from '@img/ParFour.png'
import ParFive from '@img/ParFive.png'
import ParSix from '@img/ParSix.png'
import ParSeven from '@img/ParSeven.png'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Partners = () => {
  const partnersArray = [
    ParOne,
    ParTwo,
    ParThree,
    ParFour,
    ParFive,
    ParSix,
    ParSeven
  ]
  return (
    <div className='py-10 mb-12 space-y-10'>
      <div >
        <h3 className='text-2xl text-gray-600 text-center font-bold'>Our Clinic Partners</h3>
      </div>
      <div>
        <div className='px-10 container mx-auto '>
          <Swiper
            speed={1200}
            modules={[Autoplay]}
            spaceBetween={-100}
            slidesPerView={6}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
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
            loop={true}
            loopPreventsSliding
          >
            {
              [...partnersArray, ...partnersArray].map((partner, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <img src={partner} className='w-1/2 select-none' alt="" />
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Partners