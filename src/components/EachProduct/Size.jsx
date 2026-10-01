import { useContext,useState} from 'react'
import { CartContext } from '../Context/CartCount';
import { useParams } from 'react-router-dom'
import { ProductContext } from '../Context/Context';
import { useEffect } from 'react';

const Size = () => {

const {active, setActive} =useContext(CartContext);
const[error,setError]=useState("");

const {products}=useContext(ProductContext);
const {id}= useParams();
    const product = products.find(
    (item) => item.id === Number(id)
  );

useEffect(()=>{
setActive("")
},[id])
    
  return (
    <div className='flex flex-col gap-3 mt-2'>
            <p className='text-gray-800 text-sm'>Choose Size</p>
            <div className='flex flex-wrap gap-3'>
                {product.sizes.map((size)=>{
                    return <div key={size} className={`text-sm cursor-pointer rounded-lg px-4 md:px-4 py-2 ${active===size?'bg-black text-white':'bg-gray-200 text-gray-600'}`} onClick={()=>{
                        setActive(size)
                        setError("")
                    }}>{size}</div>
                })}
            </div>

            <div>
                {error &&(
                    <p className='text-xs text-red-500'>{error}</p>
                )}
            </div>
            </div>
  )
}

export default Size