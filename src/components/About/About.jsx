import MainFooter from "../Footer/MainFooter";
import CopyRight from "../Footer/CopyRight";
import AboutHero from "./AboutHero";
import Mission from "./Mission";
import WCU from "./WCU";

const About = () => {
  return (

    <div className="max-w-7xl flex flex-col gap-10 h-full mx-auto w-full p-5">

      <AboutHero/>
      <Mission/>
      <WCU/>

      <div className="flex justify-center items-center">

         <div className='flex flex-col justify-center items-center gap-16 mt-10'>

             <MainFooter/>
             <CopyRight/>

        </div>
       </div>
    </div>
    
  )
}

export default About