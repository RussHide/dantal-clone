import WhyOne from '@img/WhyOne.png'
import WhyTwo from '@img/WhyTwo.png'
import WhyThree from '@img/WhyThree.png'
import WhyFour from '@img/WhyFour.png'


const WhyUs = () => {

  const whys = [
    { name: 'Experienced dentists', desc: 'The goal of our clinic is to provide friendly, caring dentistry.', image: WhyOne },
    { name: 'Friendly atmosphere', desc: 'The goal of our clinic is to provide friendly, caring dentistry.', image: WhyTwo },
    { name: 'Best latest technology', desc: 'The goal of our clinic is to provide friendly, caring dentistry.', image: WhyThree },
    { name: 'Reasonable prices', desc: 'The goal of our clinic is to provide friendly, caring dentistry.', image: WhyFour },
  ]


  return (
    <div className='container mx-auto pb-24 px-10'>
      <div className="text-center w-full ">
        <h2 className='text-[#142349] text-5xl font-bold'>Why Our <span className="text-[#4268D2]">Dental Clinic</span></h2>
        <p className='text-gray-400 mx-auto max-w-xl mb-14 text-lg mt-7 text-center '>We are a private health care dedicated to providing quality dental care in cosmetic, restorative, and general dentistry.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
        {
          whys.map((why, index) => (
            <div key={index}>
              <div className=' flex justify-center items-center'>
                <img src={why.image} alt="" className='rounded-full w-2/4 lg:w-3/4 mb-6 hover:scale-110 transition-all duration-300' />
              </div>
              <div>
                <h3 className='text-[#142349] text-2xl mb-1 font-semibold text-center'>{why.name}</h3>
                <h3 className='text-gray-500 text-center'>{why.desc}</h3>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default WhyUs