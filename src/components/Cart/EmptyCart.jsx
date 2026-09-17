import emptycart from '../../assets/emptycart.png'
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex justify-center items-center px-4">
        <div>
            <div>

                <img className="w-72 sm:w-96 h-60 sm:h-80  object-contain" src={emptycart} alt="" />

            </div>

            <div className="flex flex-col items-center justify-center">

                <h2 className="text-xl pb-3 font-normal">Your Cart is Empty</h2>
                <p className="text-gray-600 max-w-60 text-center text-sm sm:text-base ">Looks like you haven't made your choice yet ...</p>
                <Link to="/collection" className="bg-black cursor-pointer px-12 sm:px-14 mt-2 py-3 rounded-lg text-white">Shop Now</Link>

            </div>

        </div>
        
    </div>
  )
}

export default EmptyCart