import { ArrowRight } from "lucide-react"
import { CartContext } from "../Context/CartCount";
import { Link } from "react-router-dom";
import { useContext} from "react"

const OrderSummary = () => {

    const {cart}=useContext(CartContext);

    let subTotal=0;
    let deliveryFee=10;
    cart.forEach((item)=> {
        subTotal+=item.price * item.quantity
    });
    
    const total=subTotal+deliveryFee;

  return (
    <div className='h-full lg:w-150 w-full rounded-xl flex flex-col gap-7 p-5 border'>

                <p className='font-semibold text-lg'>Order Summary</p>
                
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
                
                <div className=''>

                    <Link to='/checkout' className='w-full flex justify-center items-center gap-1 uppercase text-sm bg-black text-white rounded cursor-pointer px-3 py-3'>proceed to checkout <span><ArrowRight size={18} /></span></Link>

                </div>

            </div>
  )
}

export default OrderSummary