import { useContext, useState} from 'react'
import {Star, Repeat2, Package} from 'lucide-react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../components/Context/Context';
import { CartContext } from '../components/Context/CartCount';
import MainFooter from "../components/Footer/MainFooter"
import CopyRight from "../components/Footer/CopyRight"
import { useEffect } from 'react';
import toast from "react-hot-toast";

const EachProduct = () => {

    const {active, setActive} =useContext(CartContext);
    const {addtocart}=useContext(CartContext);

    const {products}=useContext(ProductContext)

    const {id}= useParams();
    const product = products.find(
    (item) => item.id === Number(id)
  );

  const[chngImg, setChngImg]=useState("image")

useEffect(()=>{
setActive("")
},[id])
    
    const[error,setError]=useState("");

    const handleCartError=()=>{
        if(!active){
            setError("Please Select a size.")
            return;
        }
         addtocart(product);
         toast.success("Added to cart!") ;
    }

  return (  
    <>
    <div className='flex flex-col justify-between md:h-[calc(100vh-80px)] lg:gap-10'>
   
        <div className='max-w-7xl px-5 py-10 mx-auto w-full flex flex-col md:flex-row gap-15'>

        <div className='flex flex-col-reverse xl:flex-row w-full md:w-1/2 justify-center min-h-full gap-3 md:gap-4'>

            <div className='flex flex-row xl:flex-col gap-2 h-50 lg:gap-3'>
                <img className='h-auto md:h-50 lg:h-60 xl:h-50 w-auto rounded-xl ' src={product.image} alt="" onClick={()=>{
                    setChngImg("image")
                }}/>
                <img className='h-auto md:h-50 lg:h-60 xl:h-50 w-auto rounded-xl ' src={product.img} alt="" onClick={()=>{
                    setChngImg("img")
                }}/>
                
            </div>

            <div>
                <img className='h-full md:h-120 lg:h-130 xl:h-145 w-full rounded-xl ' src={product[chngImg]} alt={product.title} />
            </div>

        </div>


        <div className='w-full md:w-1/2 flex h-full flex-col gap-5 md:gap-6 xl:gap-4'>

            <div className='flex flex-col gap-2'>
                
            <h1 className='font-bold text-3xl md:text-4xl'>{product.title}</h1>
            <p className='flex items-center'>{product.rating}<Star fill='#FFC633' stroke='none' size={18}/></p>
            </div>

            <p className='font-semibold text-2xl'>${product.price}</p>
            <p className='text-sm text-gray-600 w-full md:w-100 lg:w-130 '>{product.description}</p>

            <hr className='text-gray-300'/>


            <div className='flex flex-col gap-3 mt-2'>
            <p className='text-gray-800 text-sm'>Choose Size</p>
            <div className='flex flex-wrap gap-3'>
                {product.sizes.map((size)=>{
                    return <div key={size} className={`text-sm cursor-pointer rounded-lg px-3 md:px-4 py-2 ${active===size?'bg-black text-white':'bg-gray-200 text-gray-600'}`} onClick={()=>{
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
            
            <hr className='text-gray-300'/>

            <div className='flex gap-2 w-full mt-2'>

                

                <button className='w-full md:w-1/2 bg-black text-white px-6 py-2 rounded-lg cursor-pointer' onClick={()=>{
                    handleCartError();
                }} >Add to Cart</button>
            </div>

            <div className='flex flex-col text-sm text-gray-600'>
                <span>100% Original product.</span>
                <span>Cash on delivery is available on this product.</span>
                <span>Easy return and exchange policy within 7 days.</span>
            </div>

            <div className='flex flex-col gap-2'>
                <p className='flex gap-2 text-gray-600'><Repeat2 className='text-gray-600'/>7-days return</p>
                <p className='flex gap-2 text-gray-600'><Package className='text-gray-600'/>Delivery estimate</p>
            </div>
        </div>

        </div>
   
        
 
    <div className="flex justify-center items-center">
         <div className='max-w-7xl mx-auto w-full flex flex-col justify-center items-center gap-16'>
             <MainFooter/>
             <CopyRight/>
        </div>
    </div>

     </div>


       
    </>

    
  )
}

export default EachProduct