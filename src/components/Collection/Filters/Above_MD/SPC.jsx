import { useContext } from 'react'
import { FilterContext } from '../../../Context/FilterProduct'

const SPC = () => {

    const {selectedProductCategory, setSelectedProductCategory, price, setPrice}=useContext(FilterContext);

  return (
    <div className='flex flex-col w-full gap-1 text-sm md:text-base text-gray-800 font-light'>
              
                <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="t-shirt"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedProductCategory("t-shirt")
                }}>T-shirts</span>

                <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="lower"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedProductCategory("lower")
                }}>Lower</span>

                <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="shirt"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`} 
                onClick={()=>{
                  setSelectedProductCategory("shirt")
                }}>Shirts</span>

                <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="jeans"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`} 
                onClick={()=>{
                  setSelectedProductCategory("jeans")
                }}>Jeans</span>

                <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="hoodie"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedProductCategory("hoodie")
                }}>Hoodie</span>

                <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="dress"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedProductCategory("dress")
                }}>Dress</span>
            
              <p className='text-base font-semibold'>${price}</p>
              
              <input className="w-full" type="range" min={0} max={100} step={5} value={price} onChange={((e)=>{
                setPrice(Number(e.target.value));
              })}/>
            </div>
  )
}

export default SPC