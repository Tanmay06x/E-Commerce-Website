import { Link } from "react-router-dom";
import model from "../../assets/model.png";
import HeroBrands from "./HeroBrands";

const HeroSection = () => {
  return (
    <div className='w-full flex flex-col justify-between h-full lg:h-150 xl:h-[calc(100vh-80px)]'>

        <div className="flex-1 flex flex-col min-h-0 md:flex-row justify-between items-center max-w-7xl gap-10 md:gap-11 lg:gap-0 w-full mx-auto p-5 sm:p-5 md:p-0 md:px-3 lg:px-5 lg:py-0 xl:p-0">

            <div className="w-full md:w-1/2 h-full flex flex-col gap-5 justify-center">

                <h1 className="font-extrabold text-3xl md:text-5xl max-w-xl w-full uppercase">Find clothes that match your style</h1>

                <p className="text-gray-800 text-sm">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

                <Link to={'/collection'} className="bg-black text-sm flex items-center justify-center text-white md:w-40 rounded-lg cursor-pointer px-10 py-3">Shop Now</Link>

                <div className="flex justify-center w-full flex-wrap gap-10 md:flex-nowrap md:justify-between items-center ">

                    <div>
                        <h4 className="font-semibold text-3xl">100+</h4>
                        <p className="text-xs text-gray-700">International Brands</p>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-3xl">2,000+</h4>
                        <p className="text-xs text-gray-700">High-Quality Products</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-3xl w-full">10,000+</h4>
                        <p className="text-xs text-gray-700">Happy Customers</p>
                    </div>

                </div>

            </div>

            <div className="w-auto flex items-cente h-full overflow-hidden md:w-1/2">
            <img className="w-full h-[400px] md:h-130 lg:h-full object-cover lg:object-center object-[70%_center]"
            src={model}
            alt="Fashion models"
            />

            </div>

        </div>

            <HeroBrands/>

        </div>
  )
}
export default HeroSection