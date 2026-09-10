import { Link } from "react-router-dom";
import aboutimg from "../../assets/aboutimg.png";
import { Package, CircleStar, Headset, MoveRight, Shirt, Star, ShieldCheck, Truck, Heart, UsersRound } from "lucide-react";

const AboutHero = () => {
  return (
    <div>
      
      <div className="min-h-[calc(100vh-80px)] flex flex-col gap-7 md:justify-center xl:flex-row xl:gap-12 justify-between items-center">

        <div className="flex flex-col gap-5 w-full xl:w-1/3">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl">Style. Quality. Made for You.</h1>

          <p className=" text-gray-800 text-sm">
            We believe fashion is more than just clothing-
            it's a way to express who you are. Our collection
            is carefully curated to bring you the perfect
            blend of style, comfort, and quality.

            <br />
            <br />

            From everyday essentials to standout pieces,
            we're here to help you look your best,
            every single day.</p>

          <div className="flex w-full justify-between">

            <div className="w-20 flex flex-col justify-center items-center">

              <p><CircleStar size={40} strokeWidth={1.2}/></p>
              <p className="uppercase text-center text-sm">premium quality</p>

            </div>

            <div className="w-30 flex flex-col justify-center items-center">

              <p><Package size={40} strokeWidth={1.2}/></p>
              <p className="uppercase text-center text-sm">Fast & Secure Delivery</p>

            </div>

            <div className="w-20 flex flex-col justify-center items-center">

              <p><Headset size={40} strokeWidth={1.2}/></p>
              <p className="uppercase text-center text-sm">Customer First</p>

            </div>

          </div>

          <Link to={'/collection'} className="flex justify-center items-center px-10 py-2 rounded cursor-pointer text-white bg-black gap-1 font-light">Shop Now <MoveRight size={18} /></Link>

        </div>

        <div className="h-full xl:w-2/3">

          <div className="relative mb-20 md:mb-40 xl:mb-0 w-full flex justify-center items-center">

            <img className="w-full rounded-2xl h-60 sm:h-72 md:h-full xl:h-110 object-cover" src={aboutimg} alt="" />

            <div className="absolute -bottom-15 md:-bottom-30 md:right-0 lg:-bottom-15 xl:-right-15 bg-white border border-gray-100 shadow-xl h-30 w-full md:h-60 md:w-40 rounded-xl flex flex-row md:flex-col p-2 justify-between items-center py-5">

              <div className="flex flex-col items-center">

                <UsersRound size={35} strokeWidth={1.3} className="bg-gray-100 rounded-full p-1" />
                <p className="font-semibold">10K+</p>
                <p className="text-xs text-gray-600">Happy Customers</p>

              </div>

              <div className="flex flex-col items-center">

                <Heart size={35} strokeWidth={1.3} className="bg-gray-100 rounded-full p-1"  />
                <p className="font-semibold">100%</p>
                <p className="text-xs text-gray-600">Satisfaction</p>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start min-h-full gap-6 md:px-2 py-7 bg-gray-50">

          <div className="flex justify-center items-center gap-2">

            <div><Shirt size={40} strokeWidth={1.2} /></div>

            <div className="w-30 md:w-full">

              <p className="font-semibold">100+</p>
              <p className="text-sm font-light">Products</p>

            </div>
          </div>

          <div className="flex justify-center items-center gap-2">

            <div><Star  size={40} strokeWidth={1.2} /></div>

            <div className="w-30 md:w-full">

              <p className="font-semibold">4.8/5</p>
              <p className="text-sm font-light">Average Rating</p>

            </div>
          </div>

          <div className="flex justify-center items-center gap-2">

            <div><ShieldCheck size={40} strokeWidth={1.2} /></div>

            <div className="w-30 md:w-full">

              <p className="font-semibold">Secure</p>
              <p className="text-sm font-light">Payments</p>

            </div>

          </div>


          <div className="flex justify-center items-center gap-2">

            <div><Truck  size={40} strokeWidth={1.2} /></div>

            <div className="w-30 md:w-full">

              <p className="font-semibold">Easy</p>
              <p className="text-sm font-light">Returns</p>

            </div>
            
          </div>
        </div>
      </div>
  )
}
export default AboutHero