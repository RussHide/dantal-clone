

const Stats = () => {
  return (
    <div className="container mx-auto my-12 lg:my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
        <div className="  relative">
          <p className="opacity-80 text-center text-9xl font-bold text-[#D0DDF4]">74</p>
          <p className="absolute top-0 text-center w-full h-full flex justify-center items-center font-semibold text-2xl text-[#142349]">Clinics</p>
        </div>
        <div className="  relative">
          <p className="opacity-80 text-center text-9xl font-bold text-[#D0DDF4]">19</p>
          <p className="absolute top-0 text-center w-full h-full flex justify-center items-center font-semibold text-2xl text-[#142349]">Countries</p>
        </div>
        <div className="  relative">
          <p className="opacity-80 text-center text-9xl font-bold text-[#D0DDF4]">20</p>
          <p className="absolute top-0 text-center w-full h-full flex justify-center items-center font-semibold text-2xl text-[#142349]">Years</p>
        </div>
        <div className="  relative">
          <p className="opacity-80 text-center text-9xl font-bold text-[#D0DDF4]">38</p>
          <p className="absolute top-0 text-center w-full h-full flex justify-center items-center font-semibold text-2xl text-[#142349]">Partners</p>
        </div>
      </div>
    </div>
  )
}

export default Stats