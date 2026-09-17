import Category from "./Category"
import DressStyle from "./DressStyle"
import SPC from "./SPC"
import Type from "./Type"
import { useContext} from 'react'
import { ProductContext } from '../../../Context/Context'
import { FilterContext } from '../../../Context/FilterProduct'


const Above_MD = () => {

const {setSelectedProductCategory, setSelectedCategory, setSelectedType, setPrice}=useContext(FilterContext);
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
    <div className='hidden lg:flex flex-col gap-5 p-5'>
            
          <hr />
          <SPC/>
          <hr />

          <DressStyle/>
          <hr />

          <Category/>
          <hr />

          <Type/>

          <div>

              <button className='cursor-pointer underline text-sm font-semibold' onClick={clearFilters}>Clear Filters</button>

            </div>
          </div>
  )
}

export default Above_MD
