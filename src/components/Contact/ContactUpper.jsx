import contactBG from '../../assets/contactBG.png'

const ContactUpper = () => {
  return (

    <div className="relative">
          <img className="h-60 md:h-80 object-cover w-full brightness-75" src={contactBG} alt="" />

          <div className="absolute inset-0 flex flex-col justify-center gap-3 md:gap-4 md:pb-10 items-center">

            <h1 className="uppercase text-3xl md:text-4xl font-semibold">Contact us</h1>
            <hr className="w-15 border-2" />

          <div className="text-sm md:text-base text-center md:font-light">

           <p>We'd love to hear from you.</p>
           <p>Have a question, suggestion, or need help?</p>
           <p>Our team is here to assist.</p>
           
           </div>
           
          </div>

        </div>
  )
}

export default ContactUpper