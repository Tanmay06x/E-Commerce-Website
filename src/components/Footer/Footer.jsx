import Newsletter from "./Newsletter";
import MainFooter from "./MainFooter";
import CopyRight from "./CopyRight";
import Shopping from "./Shopping";

const Footer = () => {
  return (

    <div className='max-w-7xl  px-4 sm:px-6 lg:px-8 w-full mx-auto flex flex-col justify-center items-center gap-16 mt-20'>

       <Newsletter/>
       <Shopping/>
       <MainFooter/>
       <CopyRight/>

    </div>
  )
}
export default Footer