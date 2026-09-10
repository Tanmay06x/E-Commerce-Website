import {Mail} from 'lucide-react'

const Newsletter = () => {

  return (
    <div>

         <form onSubmit={(e) => {e.preventDefault();
           e.target.reset();}} 
           className='w-full max-w-lg flex flex-col items-center justify-center text-center'>

            <h2 className='text-3xl sm:text-4xl font-semibold leading-loose'>Get exclusive offers</h2>
            <p className='text-sm md:text-base text-gray-700 max-w-sm'>Subscribe to receive special discounts, early access deals, and updates about new arrivals.</p>

            <div className='flex w-full flex-col md:flex-row gap-2 mt-5'>
              
              <div className='relative w-full'>

                <input className='relative w-full bg-[#F7F7F7] placeholder:text-gray-600 border-2 border-gray-300 px-11 py-3 rounded-lg' type="email" placeholder='Enter your email' />
                <Mail size={20} className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-600 '/>

              </div>
                
              <button className='bg-black text-white rounded-lg px-8 py-3 cursor-pointer'>Subscribe</button>

            </div>

        </form>
        
    </div>
  )
}

export default Newsletter