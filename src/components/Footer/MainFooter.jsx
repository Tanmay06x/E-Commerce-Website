import { IoLogoInstagram} from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom';

const MainFooter = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row gap-10 lg:gap-20 pt-2 w-full justify-center items-start px-5 md:px-8 '>

            <div className='flex flex-col gap-5 md:w-1/2'>

                <h2 className='uppercase text-3xl font-semibold'>cartify.co</h2>
                <p className='w-full text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officia molestias accusantium nesciunt culpa quae impedit iste fugiat natus quisquam sunt blanditiis, tenetur pariatur, vitae dignissimos adipisci veniam quibusdam magnam?</p>

                <div className='flex text-2xl cursor-pointer gap-2 text-gray-800'>

                    <a href="#" aria-label="Instagram"><IoLogoInstagram /></a>
                    <a href="#" aria-label="X"><BsTwitterX /></a>
                    <a href="#" aria-label="LinkedIn"><AiOutlineLinkedin /></a>

                </div>

            </div>

            <div className='flex flex-wrap md:flex-nowrap md:flex-row gap-7 md:gap-3 lg:gap-12 w-full md:w-1/2'>

                <div className='flex flex-col gap-2'>

                    <h3 className='font-semibold text-lg'>Company</h3>

                    <div className='flex flex-col text-sm text-gray-800 leading-6'>

                        <Link to={'/'}>Home</Link>
                        <Link to={'/collection'}>Collection</Link>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/contact'}>Contact</Link>

                    </div>

                </div>

                <div className='flex flex-col gap-2'>

                    <h3 className='font-semibold text-lg'>Support</h3>
                    <div className='flex flex-col text-sm text-gray-800 leading-6'>
                    <Link to="#">FAQ</Link>
                    <Link to="#">Shipping Policy</Link>
                    <Link to="#">Returns</Link>
                    <Link to="#">Privacy Policy</Link>
                    <Link to="#">Terms & Conditions</Link>

                </div>
                    
            </div>

                <div className='flex flex-col gap-2'>

                    <h3 className='font-semibold text-lg'>Get in Touch</h3>

                    <div className='flex flex-col text-sm text-gray-800 leading-6'>

                    <p>+1 234 567 890</p>
                    <p className="break-all">contact@exmaple.com</p>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default MainFooter