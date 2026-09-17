import { useContext} from 'react'
import { ProductContext } from '../../../Context/Context'

const DressStyle = () => {

const{selectedStyle, setSelectedStyle}=useContext(ProductContext);

  return (
    <div className='flex flex-col gap-1'>
              <h3 className='text-base font-semibold'>Dress Style</h3>
              <div className='text-sm text-gray-800 font-light flex flex-col gap-1'>
                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedStyle==="casual"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedStyle("casual")
                }}>Casual</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedStyle==="formal"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedStyle("formal")
                }}>Formal</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedStyle==="party"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedStyle("party")
                }}>Party</p>
                
                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedStyle==="gym"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedStyle("gym")
                }}>Gym</p>

              </div>

            </div>
  )
}

export default DressStyle