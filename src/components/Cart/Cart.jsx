import { useContext} from "react"
import { CartContext } from "../Context/CartCount";
import EmptyCart from "./EmptyCart";
import OrderSummary from "./OrderSummary";
import ProductCart from "./ProductCart";

const Cart = () => {

  const {cart}=useContext(CartContext);
  return (
    <>

    {cart.length===0?
    <EmptyCart/>

    :
    <div className='max-w-7xl mx-auto w-full h-full'>
        <h1 className='text-4xl h-0 p-4 font-semibold'>Your Cart</h1>

        <div className='flex h-full p-2 flex-col lg:flex-row justify-between gap-5 py-10'>

            <ProductCart/>
            <OrderSummary/>

        </div>
    </div>
    }
    
    </>
    
  )
}

export default Cart