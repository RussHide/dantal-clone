import { AiFillStar } from 'react-icons/ai'
import TestimonialOne from '@img/testimonialOne.png'
import TestimonialTwo from '@img/testimonialTwo.png'

const Testimonials = () => {
  return (
    <div className='bg-hero bg-cover bg-center bg-no-repeat relative my-24 py-12'>
      <div className='bg-tooth bg-cover bg-center bg-no-repeat opacity-20 absolute top-0 w-full h-full z-10' />
      <div className="container mx-auto relative z-50 px-10">
        <div className="flex justify-center items-center">
          <div className="w-1/2">
            <div className='pl-14'>
              <h3 className='text-5xl text-[#142349] font-bold'>What Our Happy</h3>
              <h3 className='text-5xl text-[#4268D2] mt-1 font-bold'>Customers Say</h3>
              <p className='my-5 text-lg max-w-lg'>
                We are a private health care dedicated to providing quality dental care in cosmetic, restorative, and general dentistry.
              </p>
              <button className='bg-[#4268D2] font-semibold text-white hover:-translate-y-1 transition-transform duration-500 px-10 py-2.5 rounded-[100px]'>Book now</button>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex justify-center items-center gap-10 ">
              <div className='bg-white py-12 px-10 rounded-tr-[100px] rounded-bl-[100px] '>
                <div className='flex '>
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                </div>
                <p className='max-w-[230px] my-7 text-gray-500 text-2xl'>“I want to say thank you to my doctor Steve! Vivamus sagittis massa vitae bibendum rhoncus. Duis cursus.”</p>
                <div className='flex '>
                  <img src={TestimonialOne} className='rounded-full w-14 h-14 mr-5' alt="" />
                  <div>
                    <p className='font-bold text-lg'>Anna Bruke</p>
                    <p className='text-gray-500 font-semibold'>Blogger, USA</p>
                  </div>
                </div>
              </div>
              <div className='bg-white py-12 px-10 rounded-tr-[100px] rounded-bl-[100px]'>
                <div className='flex  '>
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                </div>
                <p className='max-w-[230px] my-7 text-gray-500 text-2xl'>“Thank you for helping me overcome my fear of the dentist! Vivamus sagittis massa vitae bibendum rhoncus. Duis cursus.”</p>
                <div className='flex'>
                  <img src={TestimonialTwo} className='rounded-full w-14 h-14 mr-5' alt="" />
                  <div>
                    <p className='font-bold text-lg'>Jakson Flame</p>
                    <p className='text-gray-500 font-semibold'>Salesman, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials