import Newsletter from "../Footer/Newsletter"
import MainFooter from "../Footer/MainFooter"
import CopyRight from "../Footer/CopyRight"
import ContactForm from './ContactForm'
import MapNdFaq from './MapNdFaq'
import ContactUpper from './ContactUpper'

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FEFEFE] w-full">
       
      <div className="flex flex-col gap-10">
        
        <ContactUpper/>
        <ContactForm/>
        <MapNdFaq/>
        
    </div>


{/* Footer */}

        <div className="flex justify-center items-center">
        <div className='max-w-7xl px-4 sm:px-6 lg:px-8 w-full mx-auto flex flex-col justify-center items-center gap-16 mt-10'>
             <Newsletter/>
             <MainFooter/>
             <CopyRight/>
        </div>
        </div>

</div>
  )
}

export default Contact