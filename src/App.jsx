import { Footer, Partners } from './components'
import { Questions, Discount, Testimonials, Team, Treatments, WhyUs, FeatureOne, Hero, WhatWeDo } from './pages'


function App() {

  return (
    <div className='overflow-hidden flex flex-col min-h-screen'>
      <Hero />
      <Partners />
      <WhatWeDo />
      <FeatureOne />
      <div className='bg-allLight bg-center bg-cover bg-no-repeat relative bg-[#DCF9FC] mb-24'>
        <div className='bg-teeth bg-center bg-cover bg-no-repeat absolute top-0 w-full h-full opacity-20' />
        <Treatments />
        <WhyUs />
      </div>
      <Questions />
      <Team />
      <Testimonials />
      <Discount />
      <Footer/>
    </div>
  )
}

export default App
