import casual from "../../assets/casual.png";
import formal from "../../assets/formal.png";
import party from "../../assets/party.png";
import gym from "../../assets/gym.png";
import { MoveRight } from "lucide-react";
import { useContext} from 'react'
import { ProductContext } from "../Context/Context";
import { Link } from "react-router-dom";

const BrowseHome = () => {

  const {selectedStyle,setSelectedStyle}=useContext(ProductContext)

  return (
    <div className='max-w-7xl w-full mx-auto rounded-2xl flex flex-col gap-10 justify-center bg-[#F0F0F0] p-5 sm:p-7 lg:p-8 items-center'>

        <p className='text-2xl md:text-3xl h-0 mb-2 uppercase font-semibold'>Browse by dress style</p>
        <p className="text-xs font-light text-center text-gray-800">Find the perfect outfit for every occasion and express your unique style.</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 w-full'>
            
            <div className='h-60 relative col-span-1 cursor-pointer bg-[#323C49] overflow-hidden z-10 group rounded-2xl'>

              <div className="h-full absolute left-3 md:left-7 flex flex-col justify-between py-5 gap-3 w-full">

                <p className='text-lg font-semibold uppercase text-white'>Casual</p>
                

                <Link to={"/collection"} className="w-25 bg-white px-4 py-2 rounded-lg cursor-pointer flex items-center justify-center gap-1 text-xs" onClick={()=>{
                  selectedStyle("casual")
                }}>Explore <MoveRight size={16} />
                </Link>

              </div>
                <img className='h-full object-right w-full transition-transform duration-300 group-hover:scale-105 object-contain ' src={casual} alt="" />
            </div>

            <div className='h-60 relative col-span-1 lg:col-span-2 cursor-pointer bg-[#35291d] overflow-hidden  group rounded-2xl'>

              <div className="h-full absolute left-3 md:left-7 py-5 flex flex-col justify-between gap-2 w-full ">

                <p className='text-lg text-white font-semibold uppercase'>Formal</p>
                

                <Link to={"/collection"} className="w-25 bg-white px-4 py-2 rounded-lg cursor-pointer flex items-center justify-center gap-1 text-xs" onClick={()=>{
                  setSelectedStyle("formal")
                }}>Explore <MoveRight size={16} />
                </Link>

              </div>

                <img className='h-full object-right xl:object-center w-full transition-transform duration-300 group-hover:scale-105 object-contain rounded-2xl' src={formal} alt="" />

            </div>

            <div className='h-60 relative col-span-1 lg:col-span-2 cursor-pointer bg-[#C28E8D] overflow-hidden  group rounded-2xl'>

              <div className="h-full absolute left-3 md:left-7 py-5 flex flex-col justify-between gap-2 w-full ">

                <p className='text-lg text-white font-semibold uppercase'>Party</p>
                

                <Link to={"/collection"} className="w-25 bg-white px-4 py-2 rounded-lg cursor-pointer flex items-center justify-center gap-1 text-xs" onClick={()=>{
                  setSelectedStyle("party")
                }}>Explore <MoveRight size={16} />
                </Link>

              </div>

                <img className='h-full object-right  xl:object-center w-full transition-transform duration-300 group-hover:scale-105 object-contain rounded-2xl' src={party} alt="" />

            </div>

            <div className='h-60 relative col-span-1 cursor-pointer  bg-[#26292A] overflow-hidden  group rounded-2xl'>

                <div className="h-full absolute z-10 left-3 md:left-7 py-5 flex flex-col justify-between gap-2 w-full ">

                <p className='text-lg text-white font-semibold uppercase'>Gym</p>
                

                <Link to={"/collection"} className="w-25 bg-white px-4 py-2 rounded-lg cursor-pointer flex items-center justify-center gap-1 text-xs" onClick={()=>{
                  setSelectedStyle("gym")
                }}>Explore <MoveRight size={16} />
                </Link>

              </div>

                <img className='h-full object-right w-full transition-transform duration-300 group-hover:scale-105 object-contain' src={gym} alt="" />

            </div>
        </div>
    </div>
  )
}
export default BrowseHome