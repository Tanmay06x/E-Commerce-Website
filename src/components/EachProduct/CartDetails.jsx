import {Repeat2, Package} from 'lucide-react'
import toast from "react-hot-toast";
import { CartContext } from '../Context/CartCount';
import { useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../Context/Context';

const CartDetails = () => {

const {active} =useContext(CartContext);
const {addtocart}=useContext(CartContext);

const {products}=useContext(ProductContext)
const[setError]=useState("");

const {id}= useParams();
const product = products.find(
    (item) => item.id === Number(id)
  );

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
    <div className='flex gap-2 w-full mt-2'>

                <button className='w-full md:w-1/2 bg-black text-white px-6 py-3 rounded-lg cursor-pointer' onClick={()=>{
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
    </>
  )
  
}

export default CartDetails