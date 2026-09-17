import { useContext } from 'react'
import { FilterContext } from '../../../Context/FilterProduct'

const Type = () => {

const {setSelectedType, selectedType}=useContext(FilterContext);
  
  return (
    <div className='flex flex-col gap-2'>

              <h3 className='text-base md:text-lg font-semibold'>Type</h3>

              <div className='text-sm md:text-base text-gray-800 font-light flex flex-col gap-1'>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedType==="topwear"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedType("topwear")
                }}>Topwear</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedType==="bottomwear"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedType("bottomwear")
                }}>Bottomwear</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedType==="winterwear"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedType("winterwear")
                }}>Winterwear</p>

              </div>
            
            </div>
  )
}

export default Type