import { ProductContext} from '../Context/Context';
import { useParams } from 'react-router-dom'
import {useContext,useState} from 'react'

const ProductImage = () => {

const {id}= useParams();
const {products}=useContext(ProductContext)
const product = products.find(
    (item) => item.id === Number(id)
  );

const[chngImg,setChngImg]=useState("image");

  return (
    <div className='flex flex-col-reverse xl:flex-row w-full md:w-1/2 justify-center min-h-full gap-3 md:gap-4 lg:gap-2'>

            <div className='flex flex-row xl:flex-col h-full lg:justify-start gap-1 lg:gap-1 justify-between'>

                <img className='h-40 min-[540px]:w-1/2 min-[540px]:h-full md:h-50 md:w-1/2 lg:h-60 xl:h-50 xl:w-50 w-50 rounded-lg object-cover' src={product.image} alt="" onClick={()=>{
                    setChngImg("image")
                }}/>

                <img className='h-40 min-[540px]:w-1/2 min-[540px]:h-full md:h-50 md:w-1/2 lg:h-60 xl:h-50 xl:w-50 w-50 rounded-lg object-cover' src={product.img} alt="" onClick={()=>{
                    setChngImg("img")
                }}/>
                
            </div>

            <div className='w-full'>
                <img className='h-full w-full md:h-100 lg:h-110 xl:h-145 rounded-lg object-cover' src={product[chngImg]} alt={product.title} />
            </div>

        </div>
  )
}

export default ProductImage