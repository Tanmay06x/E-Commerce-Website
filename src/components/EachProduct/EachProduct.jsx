import ProductImage from './ProductImage';
import Details from './ProductDetails';
import Size from './Size';
import CartDetails from './CartDetails';
import MainFooter from "../Footer/MainFooter"
import CopyRight from "../Footer/CopyRight"

const EachProduct = () => {

  return (  
    <>
    <div className='flex flex-col justify-between md:h-[calc(100vh-80px)] lg:gap-10'>
   
        <div className='max-w-7xl px-3 py-10 mx-auto w-full flex flex-col md:flex-row gap-10'>

        <ProductImage/>

        <div className='w-full md:w-1/2 flex h-full flex-col gap-5 md:gap-4 xl:gap-4'>

           <Details/>

            <hr className='text-gray-300'/>

           <Size/>
            
            <hr className='text-gray-300'/>

            <CartDetails/>

        </div>

        </div>

<div className="flex justify-center items-center">
         <div className='max-w-7xl mx-auto w-full flex flex-col justify-center items-center gap-16'>
             <MainFooter/>
             <CopyRight/>
        </div>
</div>
</div>


       
    </>

    
  )
}

export default EachProduct