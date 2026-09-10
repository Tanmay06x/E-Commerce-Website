import {Star} from 'lucide-react'
import { useContext} from 'react'
import { ProductContext } from '../Context/Context'
import { Link } from 'react-router-dom'

const TopSelling = () => {

const {products} = useContext(ProductContext)

return (
    
    <div className='min-h-full max-w-7xl mx-auto w-full px-4 py-16 sm:px-6 lg:px-10'>

        <div className='flex justify-center items-center gap-10 flex-col'>

            <h1 className='text-4xl md:text-3xl font-semibold underline'>Top Selling</h1>
            
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full gap-10'>

                {products.slice(13,17).map((elem)=>{
                    return <Link to={`/eachproduct/${elem.id}`} key={elem.id} className='w-full flex flex-col items-start gap-5'>

                        <img className="h-[220px] md:h-[280px] cursor-pointer w-full object-cover rounded-2xl
                        transition-transform hover:scale-102 hover:shadow-lg duration-300" src={elem.image} alt={elem.title} />
                    
                    <div className=' flex flex-col gap-1'>

                        <p className='text-md font-normal h-[50px]'>{elem.title}</p>
                        <p className='flex items-center gap-1 text-sm font-semibold'>{elem.rating}<Star fill='#FFC633' size={15} stroke='none' /></p>
                        <p className='font-normal text-lg md:text-xl'>${elem.price}</p>

                    </div>

                </Link>
                })}  

            </div>

            <Link className='font-semibold text-black underline cursor-pointer' to={'/collection'}>View All</Link>

            </div>
    </div>
  )
}

export default TopSelling