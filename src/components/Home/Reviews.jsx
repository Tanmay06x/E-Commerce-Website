import {Star,Check } from 'lucide-react'
import reviews from './ReviewsData';

const Reviews = () => {
  return (
    <div className='min-h-full py-10 md:py-16'>

        <div className='h-full flex flex-col justify-center gap-10 items-center'>

            <h1 className='text-2xl sm:text-3xl md:text-4xl uppercase font-bold'>Our happy customers</h1>

            <div  id='review' className='flex px-8 lg:px-0 max-w-7xl mx-auto w-full overflow-x-auto gap-5'>

                {reviews.map((r,id)=>{
                    return  <div key={id} className='w-80 md:w-110 shrink-0 bg-[#FFFFFF] border border-gray-300 rounded-2xl flex flex-col gap-1 px-8 py-10'>

                    <span className='flex items-center'>{r.rating}<Star fill='#FFC633' size={18} stroke='none'/></span>
                    <span className='flex items-center gap-1 font-semibold text-xl'>
                        {r.name} 
                        {r.verified &&(
                            <Check size={15} className='text-white bg-[#01AB31] rounded-full'/>

                        )}
                        
                        </span>

                    <p className='text-gray-500 text-sm'>{r.review}</p>

                </div>
                })}

            </div>
        </div>
    </div>
  )
}
export default Reviews