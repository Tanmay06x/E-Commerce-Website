import { MapPin,Phone,Mail,Send,ArrowRight,User,Tag,Pencil,Clock3 } from "lucide-react"

const ContactForm = () => {
  return (

    <div className="max-w-5xl bg-[#FEFEFE] shadow-lg rounded-2xl p-5 md:p-10 mx-auto w-full">

          <div className="flex flex-col md:flex-row gap-7 justify-center">

            <div className="flex flex-col gap-6 w-full md:w-1/2"> 

              <div className="flex gap-3 items-center">

{/* left */}

                  <div>
                    <Send size={19}/>
                  </div>

                <div>
                  <p className="uppercase font-semibold">send us a message</p>
                  <p className="text-sm text-gray-900">Fill out the form and we'll get back to you.</p>
                  </div>
                </div>

            <form className="flex flex-col gap-4" onSubmit={(e)=>{
            e.preventDefault();
            e.target.reset()
          }}>

                  <div className="flex relative w-full items-center justify-start">

                  <User className="absolute left-3 top-1/2 -translate-y-1/2" size={18} />               
                  <input className="border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black text-sm w-full px-9 py-3 rounded-lg placeholder:text-gray-700 placeholder:text-sm" type="text" placeholder="Full Name" required/>

                  </div>

                <div className="flex relative w-full items-center justify-start">

                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2" size={18} />
                      <input className="border relative border-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black w-full px-9 py-3 rounded-lg placeholder:text-gray-700 placeholder:text-sm" type="email" placeholder="Email" required/>

                </div>

                <div className="flex relative w-full items-center justify-start">

                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2" size={18} />
                      <input className="border relative border-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black w-full px-9 py-3 rounded-lg placeholder:text-gray-700 placeholder:text-sm" type="text" placeholder="Subject" required/>

                </div>

                <div className="flex relative w-full items-start justify-start">

                      <Pencil className="absolute left-3 mt-2" size={18}  />
                      <textarea className="border relative border-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black w-full h-24 px-9 py-2 rounded-lg placeholder:text-gray-700 placeholder:text-sm" name="mssg" id="mssg" placeholder="Message" required></textarea>

                </div>

                <button type="submit" className="bg-black text-sm flex justify-center items-center gap-2 text-white rounded-lg cursor-pointer active:scale-[1.01] px-10 py-3">Send Message<ArrowRight size={18} /></button>
                
            </form>

          </div>

            <hr className="border-gray-200 md:w-px md:h-auto" />

{/* right */}

            <div className="w-full md:w-1/2 flex flex-col gap-10">

              <div className="flex px-3 gap-3 items-center">
                  <div><Phone/></div>

              
                <div>

                  <p className="uppercase font-semibold">contact information</p>
                  <p className="text-sm text-gray-900">Reach out to us through any of these.</p>

                </div>

                </div>

                <div className="flex flex-col gap-6">

                <div className="flex gap-3 items-start">

                 <div className="bg-gray-100 px-3 py-3 rounded-full">
                  <MapPin />
                </div>

                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-sm"> 123 Fashion Street
                <br/>New York, NY 10001, USA</p>
                </div>

               </div>
               
               <div className="flex gap-3 items-start">

                 <div className="bg-gray-100 px-3 py-3 rounded-full">
                  <Mail />
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm">contact@example.com</p>
                </div>

               </div>

               <div className="flex gap-3 items-start">

                 <div className="bg-gray-100 px-3 py-3 rounded-full">
                  <Phone />
                </div>

                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm">+1 234 567 890</p>
                </div>

               </div>

               <div className="flex gap-3 items-start">

                 <div className="bg-gray-100 px-3 py-3 rounded-full">
                  <Clock3/>
                </div>

                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM <br/> Sunday: Closed </p>
                </div>

               </div>
               
            </div>
          </div>
        </div>
      </div>
  )
}

export default ContactForm