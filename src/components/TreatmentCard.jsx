import React from 'react'

const TreatmentCard = ({ treatment }) => {
  const { name, desc, image } = treatment
  return (
    <div className='flex rounded-2xl overflow-hidden'>
      <div className='w-1/2'>
        <img src={image} alt="" />
      </div>
      <div className='bg-[#4268D2] p-7 w-1/2 flex justify-between flex-col'>
        <h3 className='font-semibold text-2xl text-white'>{name}</h3>
        <p className='text-gray-200 text-lg'>{desc}</p>
        <a href='#' className='w-fit flex justify-center items-center flex-col'>
          <p className='font-semibold text-white w-full'>Discover more</p>
          <div className='w-full h-0.5 bg-white' />
        </a>
      </div>
    </div>
  )
}

export default TreatmentCard