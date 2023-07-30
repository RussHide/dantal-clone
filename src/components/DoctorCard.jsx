
const DoctorCard = ({doctor}) => {
  const {name, role, image} = doctor
  return (
    <div className="rounded-lg overflow-hidden cursor-pointer">
      <img src={image} alt="" className="select-none"/>
      <div className="bg-[#4268D2] py-5">
        <p className="font-semibold text-xl text-white text-center">{name}</p>
        <p className="text-gray-400 text-center font-semibold">{role}</p>
      </div>
    </div>
  )
}

export default DoctorCard