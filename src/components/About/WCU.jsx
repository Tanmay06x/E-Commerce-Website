import {  CircleStar, Headset, MoveRight, Shirt, Star, ShieldCheck } from "lucide-react";

const WCU = () => {
  return (
    <div className="w-full">
        
        <div>

          <h2 className="text-3xl sm:text-4xl font-semibold">
            Why Choose Us
          </h2>

        </div>

        <p className="text-sm text-gray-600 font-light leading-6 max-w-3xl">
          We believe shopping should be simple, reliable, and enjoyable.
          That's why we put our customers at the heart of everything we do.
          From carefully selected products to a smooth online shopping
          experience, we focus on providing value at every step.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
       
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">

            <CircleStar
              size={38}
              strokeWidth={1.3}
            />

            <p className="text-lg mt-4">
              Quality You Can Trust
            </p>

            <p className="text-sm text-gray-600 font-light leading-6 mt-2">
              We believe quality matters. Every product is selected with
              attention to design, comfort, durability, and overall value,
              so you can shop with confidence.
            </p>

          </div>
          
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">

            <Shirt
              size={38}
              strokeWidth={1.3}
            />

            <p className="text-lg mt-4">
              Trendy & Versatile Collection
            </p>

            <p className="text-sm text-gray-600 font-light leading-6 mt-2">
              Our collection is designed to bring you modern styles that
              suit different personalities and occasions. Whether you're
              looking for everyday essentials or something special, we aim
              to offer something for everyone.
            </p>

          </div>

          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">

            <MoveRight
              size={38}
              strokeWidth={1.3}
            />

            <p className="text-lg mt-4">
              Easy Shopping Experience
            </p>

            <p className="text-sm text-gray-600 font-light leading-6 mt-2">
              We keep our website simple and user-friendly, making it easy
              to explore products, find what you need, and complete your
              purchase without unnecessary complications.
            </p>

          </div>

          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">

            <Headset
              size={38}
              strokeWidth={1.3}
            />

            <p className="text-lg mt-4">
              Customer First
            </p>

            <p className="text-sm text-gray-600 font-light leading-6 mt-2">
              Your satisfaction is our priority. We listen to customer
              feedback and continuously work to improve our products,
              services, and shopping experience.
            </p>

          </div>

          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">

            <ShieldCheck
              size={38}
              strokeWidth={1.3}
            />

            <p className="text-lg mt-4">
              Great Value
            </p>

            <p className="text-sm text-gray-600 font-light leading-6 mt-2">
              We aim to offer products that provide the right balance of
              style, quality, and affordability, helping you get more value
              from every purchase.
            </p>

          </div>

          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">

            <Star
              size={38}
              strokeWidth={1.3}
            />

            <p className="text-lg mt-4">
              Always Improving
            </p>

            <p className="text-sm text-gray-600 font-light leading-6 mt-2">
              We are constantly learning, growing, and improving. From
              introducing new products to enhancing our website and services,
              we strive to make every visit better than the last.
            </p>

          </div>
        </div>
     </div>
  )
}
export default WCU