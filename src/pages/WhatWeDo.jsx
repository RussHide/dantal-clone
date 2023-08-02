
import TOne from '@img/TOne.png'
import TTwo from '@img/TTwo.png'
import TThree from '@img/TThree.png'
import TFour from '@img/TFour.png'
import TFive from '@img/TFive.png'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const WhatWeDo = () => {

    const services = [
        { name: 'Emergency Care', desc: 'Toothache can be caused by various problems. An examination can help to determine it.', image: TTwo },
        { name: 'General Dental Care', desc: 'Toothache can be caused by various problems. An examination can help to determine it.', image: TThree },
        { name: 'Restorative Dentistry', desc: 'We can restore your smile, as well as speaking & eating ability with advanced prosthetics.', image: TFour },
        { name: 'Cosmetic Dentistry', desc: 'A beautiful smile contributes to a better mood and boosts self-esteem. We can help you with that.', image: TFive },
    ]

    return (
        <div className='relative bg-allLight bg-cover bg-center bg-no-repeat p-20 mb-24 '>
            <div className="container mx-auto">
                <div className='w-full mb-14 space-y-5'>
                    <h2 className='text-[#142349] text-center max-w-lg mx-auto text-5xl font-bold'>What We Do <span className="text-[#4268D2]">for Your Teeth</span></h2>
                    <p className='text-gray-600 text-center max-w-xl font-semibold mx-auto text-lg'>
                        We are a private health care dedicated to providing quality dental care in cosmetic, restorative, and general dentistry.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className='col-span-1 lg:col-span-2 bg-teeth bg-cover bg-center bg-no-repeat  bg-[#4268D2] w-full relative  container  mx-auto rounded-tr-[80px] rounded-bl-[80px] p-10 ' >
                        <div className='flex flex-col justify-start space-y-7  '>
                            <h2 className='text-white text-5xl font-semibold mb-2 max-w-2xl'>Get an interest-free loan to pay for your treatment</h2>
                            <a href="#" className='flex justify-start items-center text-white font-bold hover:text-[#c5d6ff] transition-colors duration-300  '>
                                <p>Discover more </p>
                                <MdKeyboardDoubleArrowRight className='mt-1 ml-1 text-xl' />
                            </a>
                        </div>
                        <img src={TOne} className='absolute bottom-0 right-0 w-1/6' alt="" />
                    </div>
                    {
                        services.map((service, index) => (
                            <div key={index} className='bg-white rounded-lg p-8 space-y-5 flex flex-col md:flex-row justify-center items-center  lg:space-x-0 lg:block'>
                                <div >
                                    <img src={service.image} className=' lg:w-1/6' alt="" />
                                </div>
                                <div className='space-y-2 text-center md:text-left  w-full'>
                                    <p className='font-semibold text-xl'>{service.name}</p>
                                    <p className='text-gray-600 text-md font-medium'>{service.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo