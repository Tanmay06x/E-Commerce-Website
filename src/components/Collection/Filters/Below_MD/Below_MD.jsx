import {useState} from 'react'
import SPC from './SPC'
import DressStyle from './DressStyle'
import Category from './Category'
import Type from './Type'

import {ChevronDown, ChevronRight} from 'lucide-react'

const Below_MD = () => {

const [filter, setFilter] =useState(false)

  return (

    <div>

        <div className="flex mb-0 items-center justify-between">

        <span className='text-3xl md:text-4xl font-semibold'>Filter </span>
        
          <button
          className='lg:hidden'
           onClick={()=>{setFilter(!filter)}}
          aria-label="Toggle Filter">
          {filter?<ChevronDown />:<ChevronRight />}
          </button>

          </div>
          
          {filter &&(
            <div className='mt-1 bg-white shadow-xl rounded-lg w-full flex flex-col gap-5 px-2 py-5 lg:hidden'> 
              <hr />

{/* Selected Product Category */}

            <SPC/>
            <hr />

{/* Dress Style */}

            <DressStyle/>
            <hr/>

{/* Categories */}

            <Category/>          
            <hr />

{/* Type */}

             <Type/>

          </div>
          )}

      </div>
  )
}

export default Below_MD