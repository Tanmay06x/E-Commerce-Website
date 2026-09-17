import { useContext } from 'react'
import { FilterContext } from '../../../Context/FilterProduct'

const Category = () => {

const {selectedCategory, setSelectedCategory}=useContext(FilterContext);

  return (
    <div className='flex flex-col gap-1'>

              <h3 className='text-base font-semibold'>Categories</h3>

              <div className='text-sm text-gray-800 font-light flex flex-col gap-1'>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedCategory==="women"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                  onClick={()=>{
                  setSelectedCategory("women")
                }}>Women</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedCategory==="men"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                onClick={()=>{
                  setSelectedCategory("men")
                }}>Men</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedCategory==="kids"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                  onClick={()=>{
                  setSelectedCategory("kids")
                }}>Kids</p>

              </div>
            </div>
  )
}

export default Category