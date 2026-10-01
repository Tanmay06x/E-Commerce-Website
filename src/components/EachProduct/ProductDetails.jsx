import { useContext,} from 'react'
import {Star} from 'lucide-react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../Context/Context';

const Details = () => {
const {products}=useContext(ProductContext);

const {id}= useParams();
const product = products.find(
(item) => item.id === Number(id)
  );

  return (
    <>
     <div className='flex flex-col gap-2'>
                
            <h1 className='font-bold text-3xl md:text-4xl'>{product.title}</h1>
            <p className='flex items-center font-normal'>{product.rating}<Star fill='#FFC633' stroke='none' size={18}/></p>
            
            </div>

            <p className='font-semibold text-2xl'>${product.price}</p>
            <p className='text-sm text-gray-600 w-full md:w-95 lg:w-130 '>{product.description}</p>
    </>
  )
}

export default Details