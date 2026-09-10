import { Link } from 'react-router-dom'
import { Handbag,MoveRight } from 'lucide-react'

const Shopping = () => {
  return (
    <>
    <div className='md:px-8 md:py-12 px-6 gap-6 py-10 flex flex-col justify-center items-start md:items-center md:flex-row       w-full md:justify-between border border-gray-200 rounded-xl'>

    <div className='flex h-full items-center gap-5'>

      <div className='bg-black rounded-full text-white p-3 md:p-5'>

        <Handbag size={30} md:size={50}/>

      </div>

      <div className='flex flex-col gap-2'>

            <h2 className='max-w-lg text-2xl md:text-3xl font-semibold w-full leading-snug'>Ready to upgrade your shopping?</h2>
            <p className='text-xs md:text-base text-gray-700'>Discover your next favorite look from our latest collection.</p>

      </div>

    </div>

            <Link to={'/collection'} className='w-full md:w-auto flex justify-center items-center gap-2 shrink-0 bg-black text-white rounded-lg px-7 text-sm py-3 cursor-pointer'>Start Shopping Now <MoveRight /></Link>

    </div>

    </>
  )
}
export default Shopping