import QuestionsImage from '@img/questionsImage.png'
import Collapse from 'antd/es/collapse'
import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const Questions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState('1')
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  const items = [
    {
      key: '1',
      label: <div className='flex justify-start items-center select-none'>
        {selectedQuestion === '1' ? <FaMinus className='h-4 text-[#4268D2]' /> : <FaPlus className='h-4' />}
        <p className={`ml-2 ${selectedQuestion === '1' && 'text-[#4268D2]'} `}>Why choose braces?</p>
      </div>,
      children: <p className='font-semibold text-gray-500'>{text}</p>,
    },
    {
      key: '2',
      label: <div className='flex justify-start items-center select-none'>
        {selectedQuestion === '2' ? <FaMinus className='h-4 text-[#4268D2]' /> : <FaPlus className='h-4' />}
        <p className={`ml-2 ${selectedQuestion === '2' && 'text-[#4268D2]'} `}>When can I start treatment with aligners?</p>
      </div>,
      children: <p className='font-semibold text-gray-500'>{text}</p>,
    },
    {
      key: '3',
      label: <div className='flex justify-start items-center select-none'>
        {selectedQuestion === '3' ? <FaMinus className='h-4 text-[#4268D2]' /> : <FaPlus className='h-4' />}
        <p className={`ml-2 ${selectedQuestion === '3' && 'text-[#4268D2]'} `}>When can I check patient fees?</p>
      </div>,
      children: <p className='font-semibold text-gray-500'>{text}</p>,
    },
    {
      key: '4',
      label: <div className='flex justify-start items-center select-none'>
        {selectedQuestion === '4' ? <FaMinus className='h-4 text-[#4268D2]' /> : <FaPlus className='h-4' />}
        <p className={`ml-2 ${selectedQuestion === '4' && 'text-[#4268D2]'} `}>Can I get a loan for my treatment?</p>
      </div>,
      children: <p className='font-semibold text-gray-500'>{text}</p>,

    },
  ];
  return (
    <div className="w-full  bg-leftLight bg-cover bg-center bg-no-repeat  ">
      <div className='flex flex-col lg:flex-row w-full justify-center items-center container mx-auto'>
        <div className="w-full lg:w-1/2 p-10" >
          <div>
            <h3 className='text-5xl text-[#142349] font-bold'>Popular Questions</h3>
            <h3 className='text-5xl text-[#4268D2] mt-1 font-bold'>Answered</h3>
            <p className='my-5 text-lg max-w-xl font-semibold text-gray-600'>
              If you are in need of high-quality, professional and friendly dental care, look no further than our clinic.
            </p>
          </div>
          <div>
            <Collapse defaultActiveKey={'1'} accordion bordered={false} expandIcon={() => null} className='headerCollapse' onChange={(e) => setSelectedQuestion(e[0])} items={items} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-10">
          <div>
            <img src={QuestionsImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions