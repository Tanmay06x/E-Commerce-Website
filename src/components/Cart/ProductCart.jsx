import { useContext} from "react"
import {Trash2} from 'lucide-react'
import { CartContext } from "../Context/CartCount";
import { Link } from "react-router-dom";

const ProductCart = () => {

    const {cart, setCart, setCartCount}=useContext(CartContext);

  return (

    <div id="scroll" className='rounded-xl flex flex-col overflow-x-auto w-full h-130 py-5 px-2'>
                
    {cart.map((item)=>{
                    
                    return(
        <div>
                <hr className="mb-4 text-gray-300 w-full"/> 

                <div className="flex gap-3 justify-between rounded ">
                        
                 <div className="flex gap-3">

                    <div className="shrink-0">
                    <Link to={`/eachproduct/${item.id}`}>
                        <img className="h-30 md:h-35 object-cover w-25 md:w-30 overflow-hidden rounded-lg" src={item.image} alt="" />
                    </Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-sm md:text-base w-35 md:w-full">{item.title}</p>
                        <p className="text-xs flex gap-1">Size:<p className="font-semibold">{item.size}</p></p>
                        <p className=" text-gray-900 font-semibold">${item.price}</p>
                    </div>

                    <hr className="text-gray-400"/> 

                </div>
                    
                    <div className="w-30 flex flex-col justify-between items-end">

                        <div>

                            <Trash2 size={18} md:size={20} className="cursor-pointer active:text-gray-800" onClick={() => {
                                setCart((prev)=>
                                    prev.filter((cartItems)=>
                                    !(cartItems.id===item.id && cartItems.size===item.size)
                                    )
                                )
                                setCartCount((prev)=>prev-item.quantity)
                                }}/>

                        </div>

                        <div className='flex justify-between items-center px-3 md:px-4 py-0.5 w-22 md:w-25 rounded-lg shadow bg-[#e0dddd]'>

                        <button className='text-2xl cursor-pointer' onClick={()=>{
                              setCart((prev)=>
                                prev.map((cartItem)=>
                                    cartItem.id===item.id&&cartItem.size===item.size&&cartItem.quantity>1
                                    ?{...cartItem,quantity:cartItem.quantity-1}
                                    :cartItem
                                )
                            )

                            if (item.quantity>1){
                                setCartCount((prev) => prev - 1)
                            }
                               }}>-</button>

                        <p className='text-sm'>{item.quantity}</p>

                        <button className='text-2xl cursor-pointer' onClick={()=>{
                               setCart((prev)=>
                                prev.map((cartItem)=>
                                    cartItem.id===item.id&&cartItem.size===item.size
                                    ?{...cartItem,quantity:cartItem.quantity+1}
                                    :cartItem
                                )
                            )
                            setCartCount((prev) => prev + 1)
                               }}>+</button>
                        </div>

                    </div>

                </div>

                <hr className="mt-4 text-gray-300 w-full"/>
        </div>
        
    )
})}
            </div>
  )
}

export default ProductCart