import {CircleCheck} from 'lucide-react'
import { Link } from 'react-router-dom'

const OrderConfirm = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-2">
            <CircleCheck stroke="green" size={80} strokeWidth={1.2}/>
            <h1 className="text-3xl font-semibold">Order Confirmed!</h1>
            <p className="text-gray-600 text-sm">Your order has been placed successfully.</p>
            <Link to='/collection' className="py-3 bg-gray-900 text-white px-10 rounded">Continue Shopping</Link>
        </div>
    </div>
  )
}

export default OrderConfirm