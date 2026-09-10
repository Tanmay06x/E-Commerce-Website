import { useState } from "react";
import { useContext} from "react"
import {Trash2, ArrowLeft} from 'lucide-react'
import { CartContext } from "../components/Context/CartCount";
import emptycart from '../assets/emptycart.png'
import { Link } from "react-router-dom";
import OrderConfirm from "./OrderConfirm";


const Checkout = () => {

    const [paymentMethod, setPaymentMethod] = useState("upi");
    const {cart, setCart, setCartCount}=useContext(CartContext);

        let subTotal=0;
        let deliveryFee=10;

        cart.forEach((item)=> {
            subTotal+=item.price * item.quantity
        });
        
        const total=subTotal+deliveryFee;
        const [placed,setPlaced] = useState(false);

    return (
    <>
    
    {placed?
    <Link to='/order' type="submit"><OrderConfirm/></Link>:
        cart.length===0?

        <div className="min-h-[calc(100vh-80px)] w-full flex justify-center items-center px-4">

            <div>

                <div>

                    <img className="w-72 sm:w-96 h-60 sm:h-80  object-contain" src={emptycart} alt="" />

                </div>

                <div className="flex flex-col items-center justify-center">

                    <h2 className="font-light text-lg sm:text-xl pb-5">Your Cart is Empty</h2>
                    <p className="text-gray-600 max-w-60 text-center text-sm sm:text-base ">Looks like you haven't made your choice yet ...</p>
                    <Link to="/collection" className="bg-black cursor-pointer px-10 sm:px-14 sm:py-3 mt-2 py-2 rounded-lg text-white">Shop Now</Link>

                </div>

            </div>

        </div>

        :

    <div>

    <div className='max-w-7xl mx-auto w-full h-full flex flex-col lg:flex-row justify-between gap-20 lg:gap-3 py-5'>
        
        <form className="w-full xl:w-1/2 flex flex-col gap-4 px-3" onSubmit={(e) => {
          e.preventDefault();
          setPlaced(true);
          e.target.reset();
          setCartCount(0);
          setCart([]);
        }}>

  <div>

    <h1 className="text-3xl md:text-4xl font-bold">Checkout</h1>
    <p className="text-sm text-gray-500 mt-2">
      Complete your purchase by providing your details.
    </p>

  </div>

  {/* Contact Information */}

  <div className="border border-gray-200 rounded-xl p-5 md:p-6">

    <h2 className="text-lg font-semibold mb-5">
      Contact Information
    </h2>

    <div className="flex flex-col md:flex-row gap-4">

      <input
        type="email"
        placeholder="Email address"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-800"
        required/>

      <input
        type="Number"
        placeholder="Phone number"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-800" 
        required />

    </div>

    <label className="flex items-center gap-2 mt-4 text-sm text-gray-600 cursor-pointer" required>
      <input type="checkbox" className="accent-black" required/>
      Email me with news and offers
    </label>

  </div>

  {/* Shipping Address */}

  <div className="border border-gray-200 rounded-xl p-5 md:p-6">

    <h2 className="text-lg font-semibold mb-5">
      Shipping Address
    </h2>

    <div className="flex flex-col gap-4">

      <input
        type="text"
        placeholder="Full Name"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-800"
        required/>

      <div className="flex flex-col sm:flex-row gap-4">

        <input
          type="text"
          placeholder="Address"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-800"
          required/>

        <input
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-800"
          optional
        />

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <input
          type="text"
          placeholder="City"
          className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-800"
          required/>

        <input
          type="text"
          placeholder="State"
          className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-800"
          required />

        <input
          type="text"
          placeholder="PIN Code"
          className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-800"
          required/>

      </div>

    </div>

  </div>

  <div className="w-full border border-gray-200 rounded-2xl p-5 md:p-6">

  <h2 className="text-xl font-semibold mb-5">
    Payment Method
  </h2>

  {/* Payment Options */}

  <div className="flex flex-col gap-3">

    {/* COD */}

    <button
      
      type="button"
      onClick={() => setPaymentMethod("cod")}
      className={`w-full flex items-center justify-between border rounded-xl p-4 text-left cursor-pointer transition ${
        paymentMethod === "cod"
          ? "border-black bg-gray-50"
          : "border-gray-200"
      }`}
    >
      <div className="flex items-center gap-3">

        <div className="w-5 h-5 rounded-full border flex items-center justify-center" required>

          {paymentMethod === "cod" && (
            <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
          )}

        </div>

        <div>

          <p className="font-medium text-sm">
            Cash on Delivery
          </p>

          <p className="text-xs text-gray-500">
            Pay when your order arrives
          </p>

        </div>

      </div>

      <span className="text-sm font-semibold">
        COD
      </span>

    </button>

  </div>

  {/* COD Details */}

  {paymentMethod === "cod" && (

    <div className="mt-5 rounded-lg bg-gray-50 p-4">

      <p className="font-medium text-sm">
        Cash on Delivery selected
      </p>

      <p className="text-xs text-gray-500 mt-1">
        You can pay when your order is delivered to your address.
      </p>

    </div>
  )}

</div>

{/* Buttons */}

  <div className="flex flex-col sm:flex-row gap-4">

    <Link to='/cart'
      className="w-full flex items-center gap-1 underline sm:w-auto px-6 py-3 text-sm cursor-pointer"
    >
    <ArrowLeft size={19} /> Back to Cart
    </Link>

    <button
      required
      type="submit"
      className="w-full sm:flex-1 bg-black text-white px-6 py-3 rounded-lg text-sm cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-900" 
    >
      Place Order 
    
    </button>

  </div>

        </form>

      <div className="w-full lg:w-2/3 xl:w-2/5 border border-gray-200 rounded p-5 h-full max-h-[calc(100vh-100px)]">
        
        <div className='flex justify-between items-center'>

        <p className='text-xl font-semibold px-2'>Order Summary</p>
        <Link to='/cart' className='text-sm text-black px-2 underline font-medium'>Edit Cart</Link>

        </div>

        <div className='flex p-2 flex-col gap-15'>

            <div id="scroll" className=' flex flex-col overflow-x-auto w-full max-h-90 py-2 gap-5'>
                
                {cart.map((item)=>{
                    
                  return(
                <div>

                <hr className="mb-4 text-gray-300 w-full"/> 

                <div className="flex gap-3 justify-between rounded ">
                        
                 <div className="flex gap-3">

                    <Link to={`/eachproduct/${item.id}`}>
                        <img className="h-20 object-cover w-20 rounded" src={item.image} alt="" />
                    </Link>

                    <div className="flex flex-col gap-2">

                        <p className=" text-xs md:text-sm ">{item.title}</p>
                        <p className="text-xs flex">Size: {item.size}</p>
                        <p className=" text-gray-800 text-xs md:text-sm">${item.price}</p>

                    </div>

                    <hr className="text-gray-400"/> 

                </div>
                    
                    <div className="w-30 flex flex-col justify-between items-end">

                        <div>

                            <Trash2 size={16} className="cursor-pointer active:text-gray-800" onClick={() => {
                                setCart((prev)=>
                                    prev.filter((cartItems)=>
                                    !(cartItems.id===item.id && cartItems.size===item.size)
                                    )
                                )
                                setCartCount((prev)=>prev-item.quantity)
                                }}/>

                        </div>

                        <div className='flex justify-between items-center px-3 py-0.5 w-22 rounded bg-[#F0F0F0]'>

                        <button className='text-xl cursor-pointer' onClick={()=>{

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

                        <button className='text-xl cursor-pointer' onClick={()=>{
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
                {/* <hr className="text-gray-400"/> */}

            </div>

            <div className='h-full w-full rounded-xl flex flex-col gap-7'>
                
                <div className='flex flex-col gap-2'>

                    <div className='flex justify-between'>

                        <p className='text-sm text-gray-600'>Subtotal</p>
                        <p className='font-semibold text-sm'>$ {subTotal.toFixed(2)}</p>

                    </div>

                    <div className='flex justify-between'>

                        <p className='text-sm text-gray-600'>Delivery Fee</p>
                        <p className='font-semibold text-sm'>$ {deliveryFee.toFixed(2)}</p>

                    </div>

                    <hr className='text-gray-400'/>

                    <div className='flex justify-between'>

                        <p className='text-sm text-gray-900 font-semibold'>Total</p>
                        {cart.length===0?<p className='font-semibold text-sm'>$ 0.00</p>:<p className='font-semibold text-sm'>$ {total.toFixed(2)}</p>}
                        
                    </div>

                </div>

            </div>

        </div>

      </div>

    </div>

    </div>  
    }
    </>
  )
}

export default Checkout