import {useContext} from 'react'
import { FilterContext } from '../../../Context/FilterProduct'
import { ProductContext } from '../../../Context/Context'

const SPC = () => {

      const {selectedProductCategory,setSelectedProductCategory, setSelectedCategory, setSelectedType,price, setPrice}=useContext(FilterContext);
      const{setSearch,setSelectedStyle}=useContext(ProductContext);
      
      const clearFilters=()=>{
        setSelectedProductCategory("all");
        setSelectedStyle("all");
        setSelectedCategory("all");
        setSelectedType("all");
        setPrice(100);
        setSearch("");
      }

  return (

// {/* Selected Product Category */}

    <div className='flex flex-col w-full gap-2 text-sm text-gray-800 font-light'>
            
                <div className='flex w-full justify-between items-center'>

                 <span className={`cursor-pointer md:text-base transition-all duration-200 ${
                  selectedProductCategory==="t-shirt"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`} 
                onClick={()=>{
                  setSelectedProductCategory("t-shirt")
                }}>T-shirts</span>

                <div>

                  <button className='cursor-pointer underline text-sm md:text-base font-semibold text-black' onClick={clearFilters}>Clear Filters</button>

                </div>
            
                </div>

                <span className={`cursor-pointer md:text-base transition-all duration-200 ${
                  selectedProductCategory==="lower"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`} 
                onClick={()=>{
                  setSelectedProductCategory("lower")
                }}>Lower</span>

                <span className={`cursor-pointer md:text-base transition-all duration-200 ${
                  selectedProductCategory==="shirt"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedProductCategory("shirt")
                }}>Shirts</span>

                <span className={`cursor-pointer md:text-base transition-all duration-200 ${
                  selectedProductCategory==="jeans"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedProductCategory("jeans")
                }}>Jeans</span>

                <span className={`cursor-pointer md:text-base transition-all duration-200 ${
                  selectedProductCategory==="hoodie"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`} 
                onClick={()=>{
                  setSelectedProductCategory("hoodie")
                }}>Hoodie</span>

                <span className={`cursor-pointer md:text-base transition-all duration-200 ${
                  selectedProductCategory==="dress"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                onClick={()=>{
                  setSelectedProductCategory("dress")
                }}>Dress</span>


              <p className='text-base font-semibold'>${price}</p>
              
              <input className="w-full" type="range" min={0} max={100} step={1} value={price} onChange={((e)=>{
                setPrice(Number(e.target.value));
              })}/>

              </div>
  )
}

export default SPC